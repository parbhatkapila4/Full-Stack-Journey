let ctr = 1;
function deleteTodo(index){
    const element = document.getElementById("Todo-" + index);
    element.parentNode.removeChild(element);

}


function addTodo(){
    const inputEl = document.querySelector("input");
    const value = inputEl.value;
    // Here we have select the input and store it in a var inputEl after that we have select that the value which will be put by user on web-page will be stored inside inputEl variable 

    const newDivEl = document.createElement("div");
newDivEl.setAttribute("id", "Todo-"  + ctr);


    newDivEl.innerHTML = "<div>" + value + '</div><button onclick = "deleteTodo(' + ctr + ')">Delete</button>';

    // Created a new div and stored under variable newDivEl and in next step we have declared that the new div in which it stored its html value means what we type inside will do what was written after = 


    // work of set attribute is that it will give it a id when we delete it and why +1 so that if we delete again after again it will go in increasing format so it is easy to know 
    
    document.querySelector("body").appendChild(newDivEl)
 // Here we have connected that new div with body
     ctr = ctr + 1;

   
}