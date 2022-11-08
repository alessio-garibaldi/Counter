let counter = document.querySelector("#counter");  // VARIABLE FOR THE COUNTER ELEMENT

function createElement(tag, text, classname){
    var element = document.createElement(tag);
    element.innerHTML = text;
    element.classList.add(classname);
    return element
}

var numberBox = createElement("div", "0", "number-box");
counter.appendChild(numberBox)

console.log(numberBox)
var buttonsBox = createElement("div", "", "buttons-box");
counter.appendChild(buttonsBox)

var decrease = createElement("button", "-", "increase");
buttonsBox.appendChild(decrease)

var increase = createElement("button", "+", "decrease");
buttonsBox.appendChild(increase)