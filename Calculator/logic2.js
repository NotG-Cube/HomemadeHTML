//спросить про использование useRef вместо useState 


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

calcTable.addEventListener('click', function(event){
    var text = event.target.textContent.trim();
    firstFunc(text);
})
display.addEventListener('keydown', e => {firstFunc(e.key);})

function firstFunc(text)
{
    if ("0123456789".includes(text)) { pressDigit(text);} 
    else if (text === "-" || text === "+") { pressOperator(text);}
    else if (text === "+/-") {pressToggleSign();}
    else if (text === "," || text === ".") {pressDot();}
    else if ("*/".includes(text)) { pressOperator(text); }
    else if (text === "sqrt") {pressSqrt();}
    else if (text === "%") {pressPercent();}
    else if (text === "1/x"){pressReciprocal();}
    else if (text === "=" || text === "Enter") { pressEquals(); }

    else if (text === "C") { Clear(); }
    else if (text === "CE") { pressCE(); }
    else if (text === "Backspace") {pressBackspace();}



    else if (text === "MC") {pressMC();}
    else if (text === "MR") {pressMR();}
    else if (text === "MS") {pressMS();}
    else if (text === "M+") {pressMPlus();}
}


function pressDigit(digit) 
{
    if (waitingForNumber) 
        {
            if (digit === "0") 
            {
                currentNumber = "0";   
                waitingForNumber = false;
                display.value = "0";
                return;
            }
            currentNumber = digit;
            waitingForNumber = false;
        }
    else if (currentNumber === 0 || currentNumber === "0") { if (digit === "0") return; currentNumber = digit; }
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

    if ( waitingForNumber)
    {
        currentOperator = op;
        return;
    }


    var current = parseFloat(currentNumber);

    if (previousNumber !== null && currentOperator !== null) 
    {
        var result = calculate(previousNumber, currentOperator, current);
        display.value = result;
        previousNumber = result;
        currentNumber = String(result);
    } 
    else 
    {
        previousNumber = current;
    }

    currentOperator = op;
    waitingForNumber = true;
}

function calculate(a, op, b) {
    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": 
            if (b === 0) return "Нельзя делить на 0";
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
    waitingForNumber = false;
    display.value = "0";
}

function pressCE() {
    currentNumber = "0";
    display.value = "0";
    waitingForNumber = true;
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
     currentNumber = String(-parseFloat(currentNumber));
    display.value = currentNumber;
}

function pressSqrt() {
    var val = parseFloat(currentNumber);
    if (val < 0) {
        display.value = "Корень из отрицательных не вычисляю!";
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
        display.value = "Нельзя делить на 0";
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