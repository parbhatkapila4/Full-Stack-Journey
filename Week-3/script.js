class TodoApplication {
    constructor(options = {}) {
        this.config = {
            containerSelector: options.containerSelector || 'body',
            inputSelector: options.inputSelector || 'input[data-todo-input]',
            maxTodos: options.maxTodos || 100,
            enableLocalStorage: options.enableLocalStorage !== false,
            enableDragDrop: options.enableDragDrop !== false,
            enableCategories: options.enableCategories !== false,
            animations: options.animations !== false,
            theme: options.theme || 'default'
        };
        
        this.todos = new Map();
        this.categories = new Set(['Personal', 'Work', 'Shopping', 'Health']);
        this.observers = [];
        this.draggedElement = null;
        this.todoCounter = 0;
        
        this.init();
    }

    init() {
        this.loadFromStorage();
        this.createUI();
        this.bindEvents();
        this.applyTheme();
    }

    createUI() {
        const container = document.querySelector(this.config.containerSelector);
        if (!container) throw new Error('Container not found');

        const appHTML = `
            <div class="todo-application" data-theme="${this.config.theme}">
                <header class="todo-header">
                    <h1 class="todo-title">Advanced Todo Manager</h1>
                    <div class="todo-stats">
                        <span class="stat-item">Total: <span id="total-todos">0</span></span>
                        <span class="stat-item">Completed: <span id="completed-todos">0</span></span>
                        <span class="stat-item">Pending: <span id="pending-todos">0</span></span>
                    </div>
                </header>

                <section class="todo-controls">
                    <div class="input-group">
                        <input 
                            type="text" 
                            data-todo-input 
                            placeholder="Enter your todo..." 
                            class="todo-input"
                            maxlength="200"
                        />
                        <select class="category-select">
                            ${Array.from(this.categories).map(cat => 
                                `<option value="${cat}">${cat}</option>`
                            ).join('')}
                        </select>
                        <input type="date" class="due-date-input" />
                        <select class="priority-select">
                            <option value="low">Low</option>
                            <option value="medium" selected>Medium</option>
                            <option value="high">High</option>
                            <option value="urgent">Urgent</option>
                        </select>
                        <button class="add-todo-btn" type="button">
                            <svg width="16" height="16" viewBox="0 0 24 24">
                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                            </svg>
                            Add Todo
                        </button>
                    </div>
                </section>

                <section class="todo-filters">
                    <button class="filter-btn active" data-filter="all">All</button>
                    <button class="filter-btn" data-filter="pending">Pending</button>
                    <button class="filter-btn" data-filter="completed">Completed</button>
                    <button class="filter-btn" data-filter="urgent">Urgent</button>
                </section>

                <main class="todo-container" id="todo-list"></main>

                <footer class="todo-footer">
                    <button class="bulk-action-btn" data-action="complete-all">Complete All</button>
                    <button class="bulk-action-btn" data-action="delete-completed">Delete Completed</button>
                    <button class="bulk-action-btn" data-action="export">Export</button>
                    <button class="bulk-action-btn" data-action="import">Import</button>
                </footer>
            </div>
        `;

        container.innerHTML = appHTML;
        this.injectStyles();
    }

    addTodo(todoData = {}) {
        try {
            const input = document.querySelector(this.config.inputSelector);
            const categorySelect = document.querySelector('.category-select');
            const dueDateInput = document.querySelector('.due-date-input');
            const prioritySelect = document.querySelector('.priority-select');

            const todoText = (todoData.text || input?.value || '').trim();
            
            if (!this.validateTodoInput(todoText)) {
                this.showNotification('Please enter a valid todo item', 'error');
                return null;
            }

            if (this.todos.size >= this.config.maxTodos) {
                this.showNotification(`Maximum ${this.config.maxTodos} todos allowed`, 'warning');
                return null;
            }

            const todo = new TodoItem({
                id: todoData.id || `todo_${++this.todoCounter}_${Date.now()}`,
                text: todoText,
                category: todoData.category || categorySelect?.value || 'Personal',
                dueDate: todoData.dueDate || dueDateInput?.value || null,
                priority: todoData.priority || prioritySelect?.value || 'medium',
                completed: todoData.completed || false,
                createdAt: todoData.createdAt || new Date().toISOString(),
                tags: todoData.tags || []
            });

            this.todos.set(todo.id, todo);
            this.renderTodo(todo);
            this.updateStats();
            this.saveToStorage();
            this.notifyObservers('todoAdded', todo);

            // Clear form
            if (input) input.value = '';
            if (dueDateInput) dueDateInput.value = '';
            
            this.showNotification('Todo added successfully!', 'success');
            return todo;

        } catch (error) {
            console.error('Error adding todo:', error);
            this.showNotification('Failed to add todo', 'error');
            return null;
        }
    }

    renderTodo(todo) {
        const todoElement = this.createTodoElement(todo);
        const container = document.getElementById('todo-list');
        
        if (this.config.animations) {
            todoElement.style.opacity = '0';
            todoElement.style.transform = 'translateY(-20px)';
            container.appendChild(todoElement);
            
            requestAnimationFrame(() => {
                todoElement.style.transition = 'all 0.3s ease';
                todoElement.style.opacity = '1';
                todoElement.style.transform = 'translateY(0)';
            });
        } else {
            container.appendChild(todoElement);
        }
    }

    createTodoElement(todo) {
        const todoDiv = document.createElement('div');
        todoDiv.className = `todo-item priority-${todo.priority} ${todo.completed ? 'completed' : ''}`;
        todoDiv.dataset.todoId = todo.id;
        todoDiv.draggable = this.config.enableDragDrop;

        const dueStatus = todo.dueDate ? this.getDueStatus(todo.dueDate) : '';
        const dueDateFormatted = todo.dueDate ? new Date(todo.dueDate).toLocaleDateString() : '';

        todoDiv.innerHTML = `
            <div class="todo-content">
                <div class="todo-checkbox-wrapper">
                    <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''} />
                    <span class="checkmark"></span>
                </div>
                
                <div class="todo-details">
                    <div class="todo-text" contenteditable="false">${this.escapeHtml(todo.text)}</div>
                    <div class="todo-meta">
                        <span class="todo-category">${todo.category}</span>
                        ${todo.dueDate ? `<span class="todo-due-date ${dueStatus}">${dueDateFormatted}</span>` : ''}
                        <span class="todo-created">Created: ${new Date(todo.createdAt).toLocaleDateString()}</span>
                    </div>
                    ${todo.tags.length ? `<div class="todo-tags">${todo.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}</div>` : ''}
                </div>

                <div class="todo-actions">
                    <button class="action-btn edit-btn" title="Edit">
                        <svg width="16" height="16" viewBox="0 0 24 24">
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                        </svg>
                    </button>
                    
                    <button class="action-btn duplicate-btn" title="Duplicate">
                        <svg width="16" height="16" viewBox="0 0 24 24">
                            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                        </svg>
                    </button>
                    
                    <button class="action-btn delete-btn" title="Delete">
                        <svg width="16" height="16" viewBox="0 0 24 24">
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;

        this.bindTodoEvents(todoDiv, todo);
        return todoDiv;
    }

    bindTodoEvents(todoElement, todo) {
        const checkbox = todoElement.querySelector('.todo-checkbox');
        const editBtn = todoElement.querySelector('.edit-btn');
        const deleteBtn = todoElement.querySelector('.delete-btn');
        const duplicateBtn = todoElement.querySelector('.duplicate-btn');
        const todoText = todoElement.querySelector('.todo-text');

        checkbox.addEventListener('change', () => this.toggleTodo(todo.id));
        editBtn.addEventListener('click', () => this.editTodo(todo.id));
        deleteBtn.addEventListener('click', () => this.deleteTodo(todo.id));
        duplicateBtn.addEventListener('click', () => this.duplicateTodo(todo.id));

        if (this.config.enableDragDrop) {
            todoElement.addEventListener('dragstart', (e) => this.handleDragStart(e, todo.id));
            todoElement.addEventListener('dragover', this.handleDragOver);
            todoElement.addEventListener('drop', (e) => this.handleDrop(e, todo.id));
        }
    }

    validateTodoInput(text) {
        return text && 
               text.length >= 3 && 
               text.length <= 200 && 
               !/^\s*$/.test(text) &&
               !this.isDuplicate(text);
    }

    isDuplicate(text) {
        return Array.from(this.todos.values()).some(todo => 
            todo.text.toLowerCase() === text.toLowerCase() && !todo.completed
        );
    }

    toggleTodo(todoId) {
        const todo = this.todos.get(todoId);
        if (!todo) return;

        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? new Date().toISOString() : null;

        const element = document.querySelector(`[data-todo-id="${todoId}"]`);
        element.classList.toggle('completed', todo.completed);
        
        this.updateStats();
        this.saveToStorage();
        this.notifyObservers('todoToggled', todo);
        
        this.showNotification(
            `Todo ${todo.completed ? 'completed' : 'marked as pending'}!`, 
            'success'
        );
    }

    deleteTodo(todoId) {
        if (!confirm('Are you sure you want to delete this todo?')) return;

        const todo = this.todos.get(todoId);
        const element = document.querySelector(`[data-todo-id="${todoId}"]`);
        
        if (this.config.animations) {
            element.style.transition = 'all 0.3s ease';
            element.style.opacity = '0';
            element.style.transform = 'translateX(-100%)';
            
            setTimeout(() => {
                element.remove();
                this.todos.delete(todoId);
                this.updateStats();
                this.saveToStorage();
                this.notifyObservers('todoDeleted', todo);
            }, 300);
        } else {
            element.remove();
            this.todos.delete(todoId);
            this.updateStats();
            this.saveToStorage();
        }

        this.showNotification('Todo deleted successfully!', 'success');
    }

    updateStats() {
        const total = this.todos.size;
        const completed = Array.from(this.todos.values()).filter(todo => todo.completed).length;
        const pending = total - completed;

        document.getElementById('total-todos').textContent = total;
        document.getElementById('completed-todos').textContent = completed;
        document.getElementById('pending-todos').textContent = pending;
    }

    saveToStorage() {
        if (!this.config.enableLocalStorage) return;
        
        try {
            const todosArray = Array.from(this.todos.entries());
            localStorage.setItem('advanced_todos', JSON.stringify(todosArray));
            localStorage.setItem('todo_config', JSON.stringify(this.config));
        } catch (error) {
            console.error('Failed to save to localStorage:', error);
        }
    }

    loadFromStorage() {
        if (!this.config.enableLocalStorage) return;
        
        try {
            const stored = localStorage.getItem('advanced_todos');
            if (stored) {
                const todosArray = JSON.parse(stored);
                this.todos = new Map(todosArray);
                this.todoCounter = Math.max(...Array.from(this.todos.keys()).map(id => 
                    parseInt(id.split('_')[1]) || 0
                ), 0);
            }
        } catch (error) {
            console.error('Failed to load from localStorage:', error);
        }
    }

    // Observer pattern for extensibility
    subscribe(callback) {
        this.observers.push(callback);
    }

    notifyObservers(event, data) {
        this.observers.forEach(callback => callback(event, data));
    }

    // Additional utility methods
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    showNotification(message, type = 'info') {
        // Implementation for toast notifications
        console.log(`[${type.toUpperCase()}] ${message}`);
    }

    getDueStatus(dueDate) {
        const due = new Date(dueDate);
        const now = new Date();
        const diffDays = Math.ceil((due - now) / (1000 * 60 * 60 * 24));
        
        if (diffDays < 0) return 'overdue';
        if (diffDays === 0) return 'due-today';
        if (diffDays <= 3) return 'due-soon';
        return 'due-later';
    }

    injectStyles() {
        const styles = `
            .todo-application { 
                max-width: 800px; 
                margin: 0 auto; 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                background: #f8fafc;
                border-radius: 12px;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            .todo-header { 
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 2rem;
                text-align: center;
            }
            .todo-item { 
                background: white;
                margin: 0.5rem 0;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                transition: all 0.2s ease;
            }
            .todo-item:hover { 
                transform: translateY(-1px);
                box-shadow: 0 4px 8px rgba(0,0,0,0.15);
            }
            .priority-urgent { border-left: 4px solid #ef4444; }
            .priority-high { border-left: 4px solid #f59e0b; }
            .priority-medium { border-left: 4px solid #3b82f6; }
            .priority-low { border-left: 4px solid #10b981; }
            .completed { opacity: 0.6; text-decoration: line-through; }
            /* ... more styles ... */
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }
}

class TodoItem {
    constructor(data) {
        this.id = data.id;
        this.text = data.text;
        this.category = data.category;
        this.dueDate = data.dueDate;
        this.priority = data.priority;
        this.completed = data.completed;
        this.createdAt = data.createdAt;
        this.completedAt = data.completedAt || null;
        this.tags = data.tags || [];
        this.notes = data.notes || '';
    }

    toJSON() {
        return {
            id: this.id,
            text: this.text,
            category: this.category,
            dueDate: this.dueDate,
            priority: this.priority,
            completed: this.completed,
            createdAt: this.createdAt,
            completedAt: this.completedAt,
            tags: this.tags,
            notes: this.notes
        };
    }
}

// Usage
const todoApp = new TodoApplication({
    containerSelector: '#app',
    enableLocalStorage: true,
    enableDragDrop: true,
    enableCategories: true,
    animations: true,
    theme: 'modern'
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TodoApplication, TodoItem };
}
