let resultDisplay = document.querySelector('.result-display');
let displayInputs = document.querySelector('.display-inputs');
let displayResult = document.querySelector('.display-result');

let calcContainer = document.querySelector('.calculator-container');

let hiddenElements = document.querySelectorAll('.result-display, .operands, .numbers-box, .orange-operands');

let box1 = document.querySelector('.box-1');
let box2 = document.querySelector('.box-2');
let box3 = document.querySelector('.box-3');

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
let dot = document.querySelector('.number-dot');

let orangeOperands = document.querySelector('.orange-operands');
let divide = document.querySelector('.orange-division');
let multiply = document.querySelector('.orange-multiplication');
let subtract = document.querySelector('.orange-minus');
let add = document.querySelector('.orange-plus');
let equals = document.querySelector('.orange-equal');

let AC = document.querySelector('.operand-AC');
let plusMinus = document.querySelector('.operand-plus-minus');
let percentage = document.querySelector('.operand-percentage');

let allNumbers = numbersContainer.children;
let allOrange = orangeOperands.children;
let calcChildren = calcContainer.children;

export { resultDisplay, displayInputs, displayResult, calcContainer, hiddenElements, box1, box2, box3, numbersContainer, one, two, three, four, five, six, seven, eight, nine, zero, dot, orangeOperands, divide, multiply, subtract, add, equals, AC, plusMinus, percentage, allNumbers, allOrange, calcChildren };


