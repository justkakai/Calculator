import { resultDisplay, numbersContainer, one, two, three, four, five, six, seven, eight, nine, zero, orangeOperands, divide, multiply, subtract, add, equals, AC, plusMinus, percentage, allNumbers, allOrange } from './variables.js';

resultDisplay.textContent = '';

let numsArray = [];

function addition(args) {
    let sum = 0;
    [...args].forEach(item => sum += item)
    return sum;
};

function subtraction(args) {
    let difference = [...args][0];

}

[...allNumbers].forEach(number => {
    number.addEventListener('click', function() {
        numsArray.push(parseInt(number.textContent));
        resultDisplay.textContent = resultDisplay.textContent + number.textContent;
    })
});

[...allOrange].forEach(operand => {
    operand.addEventListener('click', function() {
        //numsArray.push(parseInt(operand.textContent));
        resultDisplay.textContent = resultDisplay.textContent + operand.textContent;
    })
});

equals.addEventListener('click', function() {
    resultDisplay.textContent = addition(numsArray);
});

AC.addEventListener('click', function() {
    numsArray.splice(0, numsArray.length);
    resultDisplay.textContent = '';
});



