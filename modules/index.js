import { resultDisplay, numbersContainer, one, two, three, four, five, six, seven, eight, nine, zero, orangeOperands, divide, multiply, subtract, add, equals, AC, plusMinus, percentage, allNumbers, allOrange } from './variables.js';

resultDisplay.textContent = '';

let numsArray = [];
let operandArray = [];
let additionArray = [];
let subtractionArray = [];
let multiplicationArray = [];
let divisionArray = [];
let storedResult = [];

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

function subtraction(args) {
    let difference = [...args][0];
}

[...allNumbers].forEach(number => {
    number.addEventListener('click', function() {
        numsArray.push(parseInt(number.textContent));
        resultDisplay.textContent = resultDisplay.textContent + number.textContent;
        console.log(numsArray);
    })
});

[...allOrange].forEach(operand => {
    operand.addEventListener('click', function() {
        //numsArray.push(parseInt(operand.textContent));
        operandArray.push(operand.textContent);
        resultDisplay.textContent = resultDisplay.textContent + operand.textContent;
        console.log(operandArray);
    })
});

/*equals.addEventListener('click', function() {
    let totalSum = 0;
    //resultDisplay.textContent = addition(numsArray);
    for (let i = 0; i < operandArray.length; i++) {
        if (operandArray[i] === '+') {
            let sum = addition(numsArray[i], numsArray[i+1]);
            if (typeof storedResult[0] === undefined) {
                storedResult.push(sum);
            } else {
                storedResult.splice(0, 1, ) storedResult[0] + sum;
            }
            
            console.log(storedResult);
            resultDisplay.textContent = resultDisplay.textContent + sum;
        } else if (operandArray[i] !== '+') {
            resultDisplay.textContent = resultDisplay.textContent;
        } // giving incorrect values bc prev result needs to be stored!
    }
});*/

equals.addEventListener('click', function() {
    let calculation = numsArray.reduce((accumulated, currValue, currIndex, array) => {
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
            }
        }
    });
    resultDisplay.textContent = resultDisplay.textContent + calculation;
});


AC.addEventListener('click', function() {
    numsArray.splice(0, numsArray.length);
    operandArray.splice(0, operandArray.length);
    resultDisplay.textContent = '';
});



