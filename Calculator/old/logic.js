const calcTable = document.getElementById("calcTable");
const display = document.getElementById("display");

var currentNumber = 0;
var previousNumber = null; 
var currentOperator = null; 
var waitingForNumber = false; 
var memory = 0;           


document.addEventListener('DOMContentLoaded', function() 
{
    const display = document.getElementById("display");
    const calcTable = document.getElementById("calcTable");  
   
});


function pressDigit(digit) 
{
    if (waitingForNumber) 
        {
            currentNumber = digit;
            waitingForNumber = false;
        }
    else if (currentNumber === 0) { currentNumber = digit; }
    else { currentNumber = currentNumber + digit; }

    display.value = currentNumber;
}

function pressDot() {
    if (waitingForNumber) {
        currentNumber = "0.";
        waitingForNumber = false;
    } else if (currentNumber.indexOf(".") === -1) {
        currentNumber = currentNumber + ".";
    }
    display.value = currentNumber;
}

function pressOperator(op) {
    var current = parseFloat(currentNumber);

    if (previousNumber !== null && currentOperator !== null && !waitingForNumber) {
        var result = calculate(previousNumber, currentOperator, current);
        display.value = result;
        previousNumber = result;
        currentNumber = String(result);
    } else {
        previousNumber = current;
    }

    currentOperator = op;
    waitingForNumber = true;
    currentNumber = "0";
}

function calculate(a, op, b) {
    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": 
            if (b === 0) return "Ошибка";
            return a / b;
        default: return b;
    }
}

function pressEquals() {
    var current = parseFloat(currentNumber);

    if (previousNumber !== null && currentOperator !== null) {
        var result = calculate(previousNumber, currentOperator, current);
        display.value = result;
        currentNumber = String(result);
        previousNumber = null;
        currentOperator = null;
        waitingForNumber = true;
    }
}

function Clear() {
    currentNumber = "0";
    previousNumber = null;
    currentOperator = null;
    waitingForNumber = true;
    display.value = "0";
}

function pressCE() {
    currentNumber = "0";
    display.value = "0";
}

function pressBackspace() {
    if (currentNumber.length > 1) {
        currentNumber = currentNumber.slice(0, -1);
    } else {
        currentNumber = "0";
    }
    display.value = currentNumber;
}

function pressToggleSign() {
    var val = parseFloat(currentNumber);
    currentNumber = String(-val);
    display.value = currentNumber;
}

function pressSqrt() {
    var val = parseFloat(currentNumber);
    if (val < 0) {
        display.value = "Ошибка";
    } else {
        currentNumber = String(Math.sqrt(val));
        display.value = currentNumber;
    }
}

function pressPercent() {
    var val = parseFloat(currentNumber);
    if (previousNumber !== null) {
        currentNumber = String((previousNumber * val) / 100);
    } else {
        currentNumber = String(val / 100);
    }
    display.value = currentNumber;
}

function pressReciprocal() {
    var val = parseFloat(currentNumber);
    if (val === 0) {
        display.value = "Ошибка";
    } else {
        currentNumber = String(1 / val);
        display.value = currentNumber;
    }
}

function pressMC() {
    memory = 0;
}

function pressMR() {
    currentNumber = String(memory);
    display.value = currentNumber;
}

function pressMS() {
    memory = parseFloat(currentNumber);
}

function pressMPlus() {
    memory = memory + parseFloat(currentNumber);
}