let resultDisplay = document.querySelector('.result-display');

let numbersContainer = document.querySelector('.numbers-box');
let one = document.querySelector('.number-one');
let two = document.querySelector('.number-two');
let three = document.querySelector('.number-three');
let four = document.querySelector('.number-four');
let five = document.querySelector('.number-five');
let six = document.querySelector('.number-six');
let seven = document.querySelector('.number-seven');
let eight = document.querySelector('.number-eight');
let nine = document.querySelector('.number-nine');
let zero = document.querySelector('.number-zero');

let divide = document.querySelector('.orange-division');
let multiply = document.querySelector('.orange-multiplication');
let subtract = document.querySelector('.orange-minus');
let add = document.querySelector('.orange-plus');
let equals = document.querySelector('.orange-equal');

let AC = document.querySelector('.operand-AC');
let plusMinus = document.querySelector('.operand-plus-minus');
let percentage = document.querySelector('.operand-percentage');

let numsToAdd = [];

function addition(args) {
    let sum = 0;
    [...args].forEach(item => sum += item)
    return sum;
};

let allNumbers = numbersContainer.children;

[...allNumbers].forEach(number => {
    number.addEventListener('click', function() {
        numsToAdd.push(parseInt(number.textContent));
        resultDisplay.textContent = number.textContent;
    })
})

equals.addEventListener('click', function() {
    resultDisplay.textContent = addition(numsToAdd);
})

AC.addEventListener('click', function() {
    numsToAdd.splice(0, numsToAdd.length);
    resultDisplay.textContent = 0;
})



