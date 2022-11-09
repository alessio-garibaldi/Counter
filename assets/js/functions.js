// ONE FUNCTION FOR BOTH BUTTONS
buttonsBox.addEventListener('click', (count) => {
    if (count.target.innerText == "+"){  // IF THE CONTENT IS "+"
        let add = Number(numberBox.innerText) + 1;  //INCREASE BY ONE UNIT
        numberBox.innerText = add;
    }
    else if(count.target.innerText == "-" && numberBox.innerText != 0){ // IF THE CONTENT IS "-" AND THE INITIALVALUE IS DIFFERENT FROM "0"
        let subtract = Number(numberBox.innerText) - 1;  // DECREASE BY ONE UNIT
        numberBox.innerText = subtract;
    }
})
