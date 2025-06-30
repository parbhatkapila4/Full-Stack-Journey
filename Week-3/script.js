function addtodo(){
    let value = document.querySelector("input").value;
    let spanEl = document.createElement("span");
    let buttonEl = document.createElement("button");
    spanEl.innerHTML = value;
    buttonEl.innerHTML = "Delete";


    let divEl = document.createElement("div");
    divEl.appendChild(spanEl);
    divEl.appendChild(buttonEl);


    document.querySelector("body").appendChild(divEl);


  // Here from line 3 what we have done is we have create 2 elements span and button and given them the thing they have to do via .innerHTML and after that in line 8 we have created a div element and after that main game starts rather than write some ugly raw html code in span and then appending it to div then to body we have done in line no 9 is that we have created 2 elements under div i.e., span and button and then we have append them to div and then we havhe append div to body so that the codes look alike DOM and Better looking code....Hence here we are dealing with raw elements of DOM................ that raw ugly html code is like divEl.innerHTML = "<div> + value + </div><button>Delete></button>".... This is bad way to write code...
}