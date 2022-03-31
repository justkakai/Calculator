/*
THINGS I STILL NEED TO INCORPORATE:
1. BODMAS
2. using 2- or more digit numbers (fixed)
3. making multiple calculations one after the other 
4. starting calcs with negative numbers not working (fixed)
5. add float functionality (fixed)
6. add 'delete input' functionality (fixed)
7. remove unnecessary zeros after dot (fixed)
8. starting with '%' doesn't work as expected
9. starting with multiple non-integers doesn't work as expected
*/

import { resultDisplay, displayInputs, displayResult, calcContainer, hiddenElements, box1, box2, box3, numbersContainer, one, two, three, four, five, six, seven, eight, nine, zero, dot, del, orangeOperands, divide, multiply, subtract, add, equals, AC, plusMinus, percentage, allNumbers, allOrange, calcChildren } from './variables.js';

let numsArray = [];
let operandArray = [];
let displayArray = [];
let resultArray = [];

allNumbers.forEach(number => {
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
        if (displayArray[0] !== '-' && isNaN(Number(displayArray[0]))) {
            displayArray.splice(0, displayArray.length, '');
            operandArray.shift();
        };
        console.log(operandArray);
        console.log(displayArray);
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

del.addEventListener('click', function() {
    let withDeleted = displayArray[displayArray.length -1].slice(0, -1);
    displayArray.splice(displayArray.length -1, 1, withDeleted);
    if (displayArray[displayArray.length -1].length === 0) {
        displayArray.splice(displayArray.length -1, 1);
    }
    displayResult.textContent = displayArray.join('');
    console.log(displayArray);
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
    displayArray.forEach((item, index, array) => {
        if (item === '-' && isNaN(Number(array[index -1]))) {
            array[index +1] = item + array[index +1];
        };
        if (isNaN(Number(item)) === false) {
            numsArray.push(parseFloat(item));
        };
    });
    displayArray.forEach((item, index, array) => {
        if (item === '-') {
            array.splice(index, 1);
        };
    }); // find a better way of rewriting this to avoid repetition!!!
    console.log(displayArray);
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
    for (let i = displayArray.length -1; i >= 0; i--) {
        if (isNaN(Number(displayArray[displayArray.length -1]))) {
            displayArray.splice(displayArray.length -1, 1);
        };
    };
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

