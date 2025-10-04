# Full stack journey
## Project Description

"Full stack journey" is a comprehensive repository documenting a personal learning path through full-stack web development. This project serves as a structured collection of code examples, exercises, and mini-applications, progressing from foundational web technologies (HTML, CSS, JavaScript) to advanced frameworks and tools like React, Next.js, Node.js, Express, MongoDB, and Prisma.

The repository is organized week-by-week, reflecting the incremental learning process. It covers key concepts such as API development, database management, user authentication, state management, routing, and modern frontend development practices. Each section is designed to illustrate specific technical challenges and their solutions, making it a valuable resource for aspiring full-stack developers or anyone looking to understand the various components of a modern web application.

## Features and Capabilities

This project explores and implements a wide array of full-stack development features, including:

**Backend:**
*   **API Development:** Building RESTful APIs with Node.js and Express.js.
*   **Database Integration:**
    *   MongoDB with Mongoose for schema definition, data modeling, and interaction.
    *   PostgreSQL with Prisma for relational database management and ORM capabilities.
*   **Authentication & Authorization:**
    *   User signup and sign-in flows.
    *   JSON Web Token (JWT) based authentication for secure API access.
    *   Middleware for route protection (admin-specific routes, user-specific routes).
    *   Password hashing with `bcryptjs`.
    *   NextAuth integration for Next.js applications.
*   **Data Validation:** Using `Zod` for robust input validation.
*   **Email Services:** Integration with `nodemailer` for sending emails (demonstrated in `MongoDb-Deepdive`).
*   **Middleware:** Custom middleware for request processing and access control.

**Frontend:**
*   **React Applications:** Fundamental React concepts, component-based architecture, state management (`useState`, `useRef`, `useEffect`).
*   **Styling:**
    *   Tailwind CSS for utility-first styling and rapid UI development.
    *   Global CSS for foundational styles and theme management (light/dark mode).
*   **Custom Hooks:** Implementation of custom React hooks for reusable logic (e.g., debouncing, data fetching, previous state).
*   **Routing:** Client-side routing with `react-router-dom` (conceptual) and Next.js file-system routing.
*   **Build Tools:** Configuration and usage of Vite for fast development and bundling.
*   **HTTP Requests:** Using `axios` for making API calls from the frontend.
*   **User Interface Components:** Examples of buttons, input fields, OTP components, and basic counter applications.
*   **Next.js Specifics:**
    *   App Router and page-based components.
    *   Static asset management (SVGs).
    *   Server-side rendering (SSR) and client-side components.

**General:**
*   **Version Control:** `.gitignore` configurations for clean Git repositories.
*   **Code Quality:** ESLint configurations for enforcing coding standards and catching errors.
*   **TypeScript Integration:** Type-safe JavaScript development using `tsconfig.json` and declaration files (`.d.ts`).
*   **Reproducible Builds:** `package-lock.json` for consistent dependency management across environments.

## Tech Stack

### Frontend

*   **Primary Language:** JavaScript
*   **Frameworks/Libraries:**
    *   [React.js](https://react.dev/)
    *   [Next.js](https://nextjs.org/)
    *   [Axios](https://axios-http.com/)
*   **Styling:**
    *   [Tailwind CSS](https://tailwindcss.com/)
    *   CSS Modules (implied)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **State Management:** React Context API (demonstrated)
*   **Routing:** [React Router DOM](https://reactrouter.com/en/main) (conceptual), Next.js App Router

### Backend, Database & ORM

*   **Primary Language:** JavaScript, TypeScript
*   **Runtime:** [Node.js](https://nodejs.org/)
*   **Framework:** [Express.js](https://expressjs.com/)
*   **Databases:**
    *   [MongoDB](https://www.mongodb.com/)
    *   [PostgreSQL](https://www.postgresql.org/)
*   **ORMs/ODMs:**
    *   [Mongoose](https://mongoosejs.com/) (for MongoDB)
    *   [Prisma](https://www.prisma.io/) (for PostgreSQL)
*   **Authentication:**
    *   [JSON Web Token (JWT)](https://jwt.io/)
    *   [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
    *   [NextAuth.js](https://next-auth.js.org/)
*   **Environment Variables:** [Dotenv](https://github.com/motdotla/dotenv)
*   **Email Service:** [Nodemailer](https://nodemailer.com/about/) (demonstrated)
*   **Validation:** [Zod](https://zod.dev/)

### Development Tools

*   **Package Manager:** [npm](https://www.npmjs.com/)
*   **Linter:** [ESLint](https://eslint.org/)
*   **TypeScript Compiler:** [TypeScript](https://www.typescriptlang.org/)
*   **Version Control:** [Git](https://git-scm.com/)
*   **Code Editor:** [VS Code](https://code.visualstudio.com/) (implied by `.vscode` in some `.gitignore` files)

## Installation

To get this project up and running, follow these steps. Note that this repository contains multiple independent modules. You will need to navigate into each module's directory to set it up individually.

### Prerequisites

*   [Node.js](https://nodejs.org/en/download/) (LTS version recommended)
*   [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
*   [Git](https://git-scm.com/downloads)
*   A running instance of [MongoDB](https://www.mongodb.com/docs/manual/installation/) for modules using it.
*   A running instance of [PostgreSQL](https://www.postgresql.org/download/) for modules using it.

### Clone the Repository

First, clone the entire repository to your local machine:

```bash
git clone https://github.com/parbhatkapila4/Full-Stack-Journey.git
cd Full-Stack-Journey
```

### Backend Setup

Each backend module has its own `package.json` and dependencies.

#### MongoDB Deepdive (Week 4, 7, 8)

These modules demonstrate backend development with MongoDB and Mongoose.

1.  **Navigate to the module directory:**
    ```bash
    cd MongoDb-Deepdive/Week-4 # or Week-7, Week-8
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Environment Variables (if applicable):**
    *   For `MongoDb-Deepdive/Week-4`, ensure your `.env` file (create if it doesn't exist) contains:
        ```
        MONGO_URL=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret_key
        # Add any other variables like NODEMAILER_USER, NODEMAILER_PASS if using email
        ```
    *   For `MongoDb-Deepdive/Week-7` and `MongoDb-Deepdive/Week-8`, ensure your `.env` file (create if it doesn't exist) contains:
        ```
        MONGO_URL=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret_key
        ```
    Replace `your_mongodb_connection_string` with your actual MongoDB connection string (e.g., `mongodb://localhost:27017/yourdbname`). Replace `your_jwt_secret_key` with a strong, random string.

#### Authentication Learning (Week 6)

This module focuses on basic JWT authentication.

1.  **Navigate to the module directory:**
    ```bash
    cd Week-6/Authentication-Learning
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Environment Variables:**
    *   Create a `.env` file in `Week-6/Authentication-Learning` and add:
        ```
        JWT_SECRET=your_jwt_secret_key
        ```
    Replace `your_jwt_secret_key` with a strong, random string.

#### Other Backend Modules (Week 5, 14, 15, 18)

These modules cover various backend concepts like middleware, TypeScript with Zod, and Prisma.

1.  **Navigate to the module directory:**
    ```bash
    cd Week-5/Middleware-Learning # or Week-5/cors-backend, Week-14, Week-15, Week-18
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Environment Variables (for Week 15 & 18):**
    *   For `Week-15`, create a `.env` file in the root of `Week-15` and add:
        ```
        JWT_SECRET=Revision
        ```
    *   For `Week-18`, create a `.env` file in the root of `Week-18` and add:
        ```
        DATABASE_URL="postgresql://<user>:<password>@localhost:5432/<database>?schema=public"
        ```
        Replace `<user>`, `<password>`, and `<database>` with your PostgreSQL credentials.
    *   **For Week-18 (Prisma):** After setting `DATABASE_URL`, run Prisma migrations:
        ```bash
        npx prisma migrate dev --name init
        ```
        Follow the prompts. This will apply the database schema defined in `prisma/schema.prisma`.

### Frontend Setup

Each frontend module using React or Next.js has its own `package.json` and dependencies.

#### React Basics (Week 9, 13)

These modules demonstrate fundamental React concepts.

1.  **Navigate to the module directory:**
    ```bash
    cd Week-9/React-basics # or Week-13
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```

#### Tailwind CSS (Week 10)

This module integrates Tailwind CSS with React.

1.  **Navigate to the module directory:**
    ```bash
    cd Week-10/Tailwind/tailwind
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```

#### Custom Hooks (Week 11)

This module showcases custom React hooks.

1.  **Navigate to the module directory:**
    ```bash
    cd Week-11/Custom\ Hooks
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```

#### Routing (Week 10)

This module demonstrates client-side routing concepts in React (though the provided `App.jsx` shows Context API example, standard routing setup would follow similar installation).

1.  **Navigate to the module directory:**
    ```bash
    cd Week-10/Routing
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```

#### Next.js (Week 19, 20, 21)

These modules explore Next.js features, often with Prisma or NextAuth.

1.  **Navigate to the module directory:**
    ```bash
    cd Week-19 # or Week-20, Week-21
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Environment Variables:**
    *   For `Week-19` and `Week-21`, create a `.env` file in the root of the respective directory and add:
        ```
        DATABASE_URL="postgresql://<user>:<password>@localhost:5432/<database>?schema=public"
        # For Week-21, also add:
        NEXTAUTH_SECRET=your_nextauth_secret
        NEXTAUTH_URL=http://localhost:3000
        ```
        Replace `<user>`, `<password>`, `<database>` with your PostgreSQL credentials and `your_nextauth_secret` with a strong, random string.
    *   **For Week-19 & Week-21 (Prisma):** After setting `DATABASE_URL`, run Prisma migrations:
        ```bash
        npx prisma migrate dev --name init # (or appropriate name for existing migrations)
        ```
        Follow the prompts. This will apply the database schema defined in `prisma/schema.prisma`.

## Usage

Each module is an independent example. To run a specific module, navigate into its directory and follow the instructions below.

### Backend Usage

#### MongoDB Deepdive (Week 4, 7, 8)

These modules typically run a Node.js server.

1.  **Navigate to the module directory:**
    ```bash
    cd MongoDb-Deepdive/Week-4 # or Week-7, Week-8
    ```
2.  **Start the server:**
    ```bash
    npm start # or node index.js
    ```
    The server will usually run on `http://localhost:3000`. Check the `index.js` file for specific port.

#### Authentication Learning (Week 6)

This module runs a Node.js server with authentication endpoints.

1.  **Navigate to the module directory:**
    ```bash
    cd Week-6/Authentication-Learning
    ```
2.  **Start the server:**
    ```bash
    node index.js
    ```
    The server listens on `http://localhost:3000`.
3.  **Interact via a frontend (like `Week-6/cors-frontend`) or a tool like Postman:**
    *   `POST /signup` with `username` and `password` in body.
    *   `POST /signin` with `username` and `password` in body to get a JWT.
    *   `GET /me` with `Authorization: Bearer <your_jwt_token>` header.

#### Other Backend Modules (Week 5, 14, 15, 18)

These modules run Node.js servers, some with TypeScript compilation.

1.  **Navigate to the module directory:**
    ```bash
    cd Week-5/Middleware-Learning # or Week-5/cors-backend, Week-14, Week-15, Week-18
    ```
2.  **Start the server/application:**
    *   For JavaScript-based modules (Week-5):
        ```bash
        node index.js
        ```
    *   For TypeScript-based modules (Week-14, Week-15, Week-18):
        ```bash
        npm run dev # This will typically compile and run
        # Or manually:
        # npx tsc # to compile
        # node dist/index.js # to run compiled output
        ```
    Check the `package.json` `scripts` section for exact commands.

### Frontend Usage

Frontend modules are typically React or Next.js applications.

#### React Basics (Week 9, 13)

These are Vite-based React apps.

1.  **Navigate to the module directory:**
    ```bash
    cd Week-9/React-basics # or Week-13
    ```
2.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will open in your browser, usually on `http://localhost:5173`.

#### Tailwind CSS (Week 10)

This is a Vite-based React app with Tailwind CSS.

1.  **Navigate to the module directory:**
    ```bash
    cd Week-10/Tailwind/tailwind
    ```
2.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will open in your browser, usually on `http://localhost:5173`.

#### Custom Hooks (Week 11)

This is a Vite-based React app demonstrating custom hooks.

1.  **Navigate to the module directory:**
    ```bash
    cd Week-11/Custom\ Hooks
    ```
2.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will open in your browser, usually on `http://localhost:5173`.

#### Routing (Week 10)

This is a Vite-based React app.

1.  **Navigate to the module directory:**
    ```bash
    cd Week-10/Routing
    ```
2.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will open in your browser, usually on `http://localhost:5173`.

#### Next.js (Week 19, 20, 21)

These are Next.js applications.

1.  **Navigate to the module directory:**
    ```bash
    cd Week-19 # or Week-20, Week-21
    ```
2.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will open in your browser, usually on `http://localhost:3000`.

## Project Structure

The project is organized into weekly directories, each containing specific learning modules.

```
Full-Stack-Journey/
├── MongoDb-Deepdive/
│   ├── Week-4/                     # Backend: Express, Mongoose, Dotenv, Nodemailer
│   │   ├── admin.js
│   │   ├── index.js
│   │   ├── models.js
│   │   ├── package-lock.json
│   │   └── package.json
│   ├── Week-7/                     # Backend: Express, Mongoose, Bcryptjs, Zod (Todo App)
│   │   ├── db.js
│   │   ├── index.js
│   │   ├── package-lock.json
│   │   └── package.json
│   └── Week-8/                     # Backend: Express, Mongoose, JWT (Course Selling App)
│       ├── admin.js
│       ├── course.js
│       ├── db.js
│       ├── index.js
│       ├── package-lock.json
│       ├── package.json
│       ├── readme
│       └── user.js
├── Week-5/
│   ├── Middleware-Learning/        # Backend: Express, Middleware example
│   │   ├── Middleware.js
│   │   ├── index.js
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   └── practice.js
│   └── cors-backend/               # Backend: Express, CORS
│       ├── index.js
│       ├── package-lock.json
│       └── package.json
├── Week-6/
│   ├── Authentication-Learning/    # Backend: Express, JWT (Basic Auth)
│   │   ├── index.js
│   │   ├── package-lock.json
│   │   └── package.json
│   └── cors-frontend/              # Frontend: HTML, JS (Axios) to interact with cors-backend
│       ├── index.html
│       └── script.js
├── Week-9/
│   └── React-basics/               # Frontend: React, Vite, Tailwind CSS (Coin Flip App)
│       ├── App.jsx
│       ├── index.css
│       ├── main.jsx
│       ├── package-lock.json
│       ├── package.json
│       ├── posts.jsx
│       └── vite.config.js
├── Week-10/
│   ├── Routing/                    # Frontend: React, Vite (Context API example)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   └── vite.config.js
│   └── Tailwind/                   # Frontend: React, Vite, Tailwind CSS (Counter App)
│       └── tailwind/
│           ├── App.css
│           ├── App.jsx
│           ├── index.css
│           ├── main.jsx
│           ├── package-lock.json
│           ├── package.json
│           └── vite.config.js
├── Week-11/
│   └── Custom Hooks/               # Frontend: React, Vite (Debounce, Fetch, Prev hooks)
│       ├── App.jsx
│       ├── index.css
│       ├── main.jsx
│       ├── package-lock.json
│       ├── package.json
│       ├── useDebounce.js
│       ├── useFetch.js
│       ├── usePrev.js
│       └── vite.config.js
├── Week-13/                        # Frontend: React, Vite, Tailwind CSS (Post Component)
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── package-lock.json
│   ├── package.json
│   ├── Post.jsx
│   └── vite.config.js
├── Week-14/                        # Backend: TypeScript, Express, Zod (User Profile Update)
│   ├── index.ts
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json
├── Week-15/                        # Backend: TypeScript, Express, JWT (Auth)
│   ├── auth.ts
│   ├── db.ts
│   ├── index.ts
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json
├── Week-18/                        # Backend: Next.js, Prisma, PostgreSQL (Users & Todos)
│   ├── index.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── prisma/
│   │   └── schema.prisma
│   └── tsconfig.json
├── Week-19/                        # Frontend/Backend: Next.js, Prisma, PostgreSQL (Auth UI)
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── signin/page.tsx
│   │   ├── signup/page.tsx
│   │   └── api/v1/signup/route.ts
│   ├── next.config.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── prisma/
│   │   └── schema.prisma
│   └── tsconfig.json
├── Week-20/                        # Frontend/Backend: Next.js (Basic pages & client components)
│   ├── app/
│   │   ├── bad/page.tsx
│   │   ├── good/page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── next.config.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.mjs
│   └── tsconfig.json
└── Week-21/                        # Frontend/Backend: Next.js, NextAuth (Auth)
    ├── app/
    │   ├── api/auth/[...nextauth]/route.ts
    │   ├── layout.tsx
    │   └── page.tsx
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    └── tsconfig.json
```

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  **Fork the repository.**
2.  **Create a new branch** for your feature or bug fix: `git checkout -b feature/your-feature-name` or `bugfix/issue-description`.
3.  **Make your changes.** Ensure your code adheres to the existing style and quality.
4.  **Test your changes.**
5.  **Commit your changes** with a clear and concise message: `git commit -m "feat: Add new feature"`.
6.  **Push your branch** to your forked repository: `git push origin feature/your-feature-name`.
7.  **Open a Pull Request** to the `main` branch of this repository.

Please ensure your code is well-commented and includes any necessary updates to documentation.

## Contact

For any questions or support, please open an issue in the GitHub repository or contact the maintainer:

*   **GitHub:** [parbhatkapila4](https://github.com/parbhatkapila4)
*   **Repository:** [Full-Stack-Journey](https://github.com/parbhatkapila4/Full-Stack-Journey)
