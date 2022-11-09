// VARIABLE FOR THE COUNTER
let counter = document.querySelector("#counter");  

// FUNCTION TO CREATE HTML ELEMENTS
function createElement(tag, text, classname){
    let element = document.createElement(tag);
    element.innerText = text;
    element.classList.add(classname);
    return element
}

// DIV FOR THE INITIAL VALUE (O)
let numberBox = createElement("div", "0", "number-box");
counter.appendChild(numberBox)

// INITIAL VALUE VARIABLE AND MADE IT A NUMBER
let initialValue = Number(numberBox.innerText)

// DIV FOR THE + / - BUTTONS
let buttonsBox = createElement("div", "", "buttons-box");
counter.appendChild(buttonsBox)

// BUTTON -
let decrease = createElement("button", "-", "decrease");
buttonsBox.appendChild(decrease)

//BUTTON +
let increase = createElement("button", "+", "increase");
buttonsBox.appendChild(increase)


