/*
THINGS I STILL NEED TO INCORPORATE:
1. BODMAS
2. using 2- or more digit numbers
3. making multiple calculations one after the other
*/

import { resultDisplay, displayInputs, displayResult, numbersContainer, one, two, three, four, five, six, seven, eight, nine, zero, orangeOperands, divide, multiply, subtract, add, equals, AC, plusMinus, percentage, allNumbers, allOrange } from './variables.js';

let numsArray = [];
let operandArray = [];
let displayArray = [];

/*function addition(args) {
    let sum = 0;
    [...args].forEach(item => sum += item)
    return sum;
};*/

function addition(...args) {
    let sum = 0;
    [...args].forEach(item => sum += item)
    return sum;
};

/*[...allNumbers].forEach(number => {
    number.addEventListener('click', function() {
        numsArray.push(parseInt(number.textContent));
        displayArray.push(number.textContent);
        displayResult.textContent = displayArray.join('');
        console.log(numsArray);
        console.log(displayArray);
    })
});*/

[...allNumbers].forEach(number => {
    let moreThanOneDigit = '';
    number.addEventListener('click', function() {
        if (isNaN(Number(displayArray[displayArray.length -1])) === true) {
            displayArray.push(number.textContent);
        } else {
            moreThanOneDigit = displayArray[displayArray.length -1] + number.textContent;
            displayArray.splice(displayArray.length -1, 1, moreThanOneDigit);
        }
        displayResult.textContent = displayArray.join('');
        console.log(displayArray);
    })
});

[...allOrange].forEach(operand => {
    operand.addEventListener('click', function() {
        if (operand.textContent !== '=') {
            operandArray.push(operand.textContent); 
            displayArray.push(operand.textContent);
            displayResult.textContent = displayArray.join('');
        }
        console.log(operandArray);
    })
});

percentage.addEventListener('click', function() {
    operandArray.push(percentage.textContent); 
    displayArray.push(percentage.textContent);
    displayResult.textContent = displayArray.join('');
})

plusMinus.addEventListener('click', function() {
    numsArray[numsArray.length -1] = numsArray[numsArray.length -1] * -1;
    displayArray[displayArray.length -1] = displayArray[displayArray.length -1] * -1;
    displayResult.textContent = displayArray.join('');
    console.log(displayResult.textContent);
})

equals.addEventListener('click', function() {
    displayArray.forEach(item => {
        if (isNaN(Number(item)) === false) {
            numsArray.push(parseInt(item));
        };
    });
    console.log(numsArray);
    let calculation = numsArray.reduce((accumulated, currValue, currIndex) => {
        if (currIndex === 0) {
            return currValue;
        } else {
            if (operandArray[currIndex -1] === '+') {
                return accumulated + currValue;
            } else if (operandArray[currIndex -1] === '-') {
                return accumulated - currValue;
            } else if (operandArray[currIndex -1] === '×') {
                return accumulated * currValue;
            } else if (operandArray[currIndex -1] === '÷') {
                return accumulated / currValue;
            } else if (operandArray[currIndex -1] === '%') {
                return accumulated * currValue / 100;
            }
        }
    });
    displayInputs.textContent = displayArray.join('');
    displayResult.textContent = calculation;
    displayArray.splice(0, displayArray.length);
});

AC.addEventListener('click', function() {
    numsArray.splice(0, numsArray.length);
    operandArray.splice(0, operandArray.length);
    displayArray.splice(0, displayArray.length);
    displayInputs.textContent = null;
    displayResult.textContent = null;
});



