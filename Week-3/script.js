function addtodo() {
  let value = document.querySelector("input").value;
  let spanEl = document.createElement("span");
  let buttonEl = document.createElement("button");
  spanEl.innerHTML = value;
  buttonEl.innerHTML = "Delete";

  let divEl = document.createElement("div");
  divEl.appendChild(spanEl);
  divEl.appendChild(buttonEl);

  document.querySelector("body").appendChild(divEl);
}
