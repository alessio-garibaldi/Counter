increase.addEventListener("click", function add() {
    let result = Number(numberBox.innerText) + 1;
    numberBox.innerText = result;
});

decrease.addEventListener("click", function subtract() {
    if (numberBox.innerText != 0) {
        let result = Number(numberBox.innerText) - 1;
        numberBox.innerText = result;
    }
});
