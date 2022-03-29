/*
THINGS I STILL NEED TO INCORPORATE:
1. BODMAS
2. using 2- or more digit numbers (fixed)
3. making multiple calculations one after the other
4. starting calcs with negative numbers not working (fixed)
5. add float functionality (fixed)
6. add 'delete input' functionality
7. remove unnecessary zeros after dot (fixed)
*/

import { resultDisplay, displayInputs, displayResult, calcContainer, hiddenElements, box1, box2, box3, numbersContainer, one, two, three, four, five, six, seven, eight, nine, zero, dot, orangeOperands, divide, multiply, subtract, add, equals, AC, plusMinus, percentage, allNumbers, allOrange, calcChildren } from './variables.js';

let numsArray = [];
let operandArray = [];
let displayArray = [];
let resultArray = [];

[...allNumbers].forEach(number => {
    let moreThanOneDigit = '';
    number.addEventListener('click', function() {
        if (isNaN(Number(displayArray[displayArray.length -1]))) {
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
        if (isNaN(Number(displayArray[0]))) {
            displayArray.unshift(resultArray[resultArray.length -1]);
        };
        console.log(operandArray);
    })
});

percentage.addEventListener('click', function() {
    operandArray.push(percentage.textContent); 
    displayArray.push(percentage.textContent);
    displayResult.textContent = displayArray.join('');
});

plusMinus.addEventListener('click', function() {
    numsArray[numsArray.length -1] = numsArray[numsArray.length -1] * -1;
    displayArray[displayArray.length -1] = displayArray[displayArray.length -1] * -1;
    displayResult.textContent = displayArray.join('');
    console.log(displayResult.textContent);
});

equals.addEventListener('click', function() {
    if (displayArray[0] === '-') {
        let firstNegatedDigit = displayArray[0] + displayArray[1];
        operandArray.splice(0, 1);
        displayArray.splice(0, 2, firstNegatedDigit);
        console.log(displayArray);
        console.log(operandArray);
        console.log(numsArray);
    }
    displayArray.forEach(item => {
        if (isNaN(Number(item)) === false) {
            numsArray.push(parseFloat(item));
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
    let calcToString = calculation.toString();
    if (calcToString.includes('.')) {
        let calcDecimalPlaces = calcToString.split('.')[1].length;
        if (calcDecimalPlaces > 7) {
            displayResult.textContent = parseFloat(calculation.toFixed(7));
        } else {
            displayResult.textContent = parseFloat(calculation);
        }
    } else {
        displayResult.textContent = parseFloat(calculation);
    }
    resultArray.push(parseFloat(displayResult.textContent));
    console.log(resultArray);
    displayArray.splice(0, displayArray.length, resultArray[resultArray.length -1]);
    numsArray.splice(0, numsArray.length);
    operandArray.splice(0, operandArray.length);
});

AC.addEventListener('click', function() {
    numsArray.splice(0, numsArray.length);
    operandArray.splice(0, operandArray.length);
    displayArray.splice(0, displayArray.length);
    resultArray.splice(0, resultArray.length);
    displayInputs.textContent = null;
    displayResult.textContent = null;
});

/*box2.addEventListener('click', function() {
    [...calcChildren].forEach(item => {
        if (!item.classList.contains('display')) {
            item.style.display = 'none';
            calcContainer.style.backgroundColor = 'inherit';
            calcContainer.style.backgroundImage = 'url(../images/overlay.png)';
            calcContainer.style.boxShadow = 'none';
        }
    });
});

box2.addEventListener('click', function() {
    [...calcChildren].forEach(item => {
        if (!item.classList.contains('display')) {
            item.style.display = 'grid';
            calcContainer.style.backgroundColor = 'var(--calc-container-bg)';
            calcContainer.style.backgroundImage = 'none';
            calcContainer.style.boxShadow = 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px';
        }
    });
});*/

