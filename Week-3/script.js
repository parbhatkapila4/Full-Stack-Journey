function addtodo(){
    let value = document.querySelector("input").value;
    let newToDoDivEl = document.createElement("div");
    newToDoDivEl.innerHTML = value;
    document.querySelector("body").appendChild(newToDoDivEl);
}