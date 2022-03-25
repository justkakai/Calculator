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

let resultDisplay = document.querySelector('.result-display');

let numsToAdd = [];

function addition(args) {
    let sum = 0;
    [...args].forEach(item => sum += item)
    return sum;
};

two.addEventListener('click', function() {
    numsToAdd.push(parseInt(two.textContent));
    console.log(numsToAdd);
})

three.addEventListener('click', function() {
    numsToAdd.push(parseInt(three.textContent));
    console.log(numsToAdd);
})

equals.addEventListener('click', function() {
    resultDisplay.textContent = addition(numsToAdd);
})


