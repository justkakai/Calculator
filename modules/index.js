import { resultDisplay, displayInputs, displayResult, numbersContainer, one, two, three, four, five, six, seven, eight, nine, zero, orangeOperands, divide, multiply, subtract, add, equals, AC, plusMinus, percentage, allNumbers, allOrange } from './variables.js';

displayResult.textContent = '';

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

[...allNumbers].forEach(number => {
    number.addEventListener('click', function() {
        numsArray.push(parseInt(number.textContent));
        displayResult.textContent = displayResult.textContent + number.textContent;
        console.log(numsArray);
    })
});

[...allOrange].forEach(operand => {
    operand.addEventListener('click', function() {
        if (operand.textContent !== '=') {
           operandArray.push(operand.textContent); 
           displayResult.textContent = displayResult.textContent + operand.textContent;
        }
        console.log(operandArray);
    })
});

percentage.addEventListener('click', function() {
    operandArray.push(percentage.textContent); 
    displayResult.textContent = displayResult.textContent + percentage.textContent;
})

plusMinus.addEventListener('click', function() {
    numsArray[numsArray.length -1] = numsArray[numsArray.length -1] * -1;
    //operandArray.push(plusMinus.textContent); 
    displayResult.textContent = displayResult.textContent;
    console.log(displayResult.textContent);
})

equals.addEventListener('click', function() {
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
    displayInputs.textContent = displayResult.textContent;
    displayResult.textContent = calculation;
});

AC.addEventListener('click', function() {
    numsArray.splice(0, numsArray.length);
    operandArray.splice(0, operandArray.length);
    displayInputs.textContent = '';
    displayResult.textContent = '';
});



