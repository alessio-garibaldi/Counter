let counter = document.querySelector("#counter");  // VARIABLE FOR THE COUNTER ELEMENT

// CREATION OF MY INITIAL VALUE (0)
let numberBox = document.createElement("div");
numberBox.classList.add("number-box")
counter.appendChild(numberBox) 
numberBox.innerText = 0  // INITIAL VALUE


// CREATION OF THE BUTTON'S CONTAINER
let buttonsBox = document.createElement("div")
buttonsBox.classList.add("buttons-box")
counter.appendChild(buttonsBox)


// CREATION OF MY BUTTONS ( - , + )
let decrease = document.createElement("button")
decrease.classList.add("decrease")
buttonsBox.appendChild(decrease)
decrease.innerHTML = "-"

let increase = document.createElement("button")
increase.classList.add("increase")
buttonsBox.appendChild(increase)
increase.innerHTML = "+"