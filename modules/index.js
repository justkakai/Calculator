import { resultDisplay, displayInputs, displayResult, numbersContainer, one, two, three, four, five, six, seven, eight, nine, zero, orangeOperands, divide, multiply, subtract, add, equals, AC, plusMinus, percentage, allNumbers, allOrange } from './variables.js';

//displayResult.textContent = '';

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
        displayArray.push(number.textContent);
        displayResult.textContent = displayArray.join('');
        console.log(numsArray);
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
    displayInputs.textContent = '';
    displayResult.textContent = '';
});



