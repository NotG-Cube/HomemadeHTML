function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Ошибка: деление на ноль";
    }
    return a / b;
}

function calculate() {
    var valueA = document.getElementById("numA").value;
    var valueB = document.getElementById("numB").value;
    var operation = document.getElementById("operation").value;
    var result = document.getElementById("calcResult");

    var a = Number(valueA);
    var b = Number(valueB);

    if (valueA === "" || valueB === "" || isNaN(a) || isNaN(b)) {
        result.textContent = "Ошибка: введите корректные числа";
        return;
    }

    var answer;

    if (operation === "add") {
        answer = add(a, b);
    } else if (operation === "subtract") {
        answer = subtract(a, b);
    } else if (operation === "multiply") {
        answer = multiply(a, b);
    } else if (operation === "divide") {
        answer = divide(a, b);
    }

    result.textContent = "Результат: " + answer;
}


function generateTable(num) {
    var html = "";
    for (var i = 1; i <= 10; i++) {
        html = html + num + " × " + i + " = " + (num * i) + "<br>";
    }
    return html;
}
function showTable() {
    var value = document.getElementById("multiplyNum").value;
    var result = document.getElementById("tableResult");
    result.innerHTML = "";
    var num = Number(value);
    if (value === "" || isNaN(num)) {
        result.textContent = "Ошибка: введите корректное число";
        return;
    }
    result.innerHTML = generateTable(num);
}

var products = ["Ноутбук", "Мышь", "Клавиатура", "Монитор"];
function createCard(name) {
    var card = document.createElement("div");
    card.className = "card";
    card.textContent = name;
    return card;
}
function renderCards() {
    var container = document.getElementById("cardsContainer");
    container.innerHTML = "";
    for (var i = 0; i < products.length; i++) {
        var card = createCard(products[i]);
        container.appendChild(card);
    }
}

var numbers = [];
function getSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
function getAverage(arr) {
    var sum = getSum(arr);
    return sum / arr.length;
}
function addNumber() {
    var value = document.getElementById("numberInput").value;
    var listBlock = document.getElementById("numberList");
    var sumBlock = document.getElementById("sumResult");
    var avgBlock = document.getElementById("avgResult");
    if (value === "" || isNaN(Number(value))) {
        return;
    }
    var num = Number(value);
    numbers.push(num);
    listBlock.textContent = "Числа: " + numbers.join(", ");
    sumBlock.textContent = "Сумма: " + getSum(numbers);
    avgBlock.textContent = "Среднее: " + getAverage(numbers);
    document.getElementById("numberInput").value = "";
}

function validatePassword(password) {
    var errors = [];
    if (password.length < 8) {
        errors.push("Пароль должен быть не менее 8 символов");
    }
    var hasDigit = false;
    for (var i = 0; i < password.length; i++) {
        if (password[i] >= "0" && password[i] <= "9") {
            hasDigit = true;
        }
    }
    if (hasDigit === false) {
        errors.push("Пароль должен содержать хотя бы одну цифру");
    }
    var hasLetter = false;
    for (var i = 0; i < password.length; i++) {
        var ch = password[i].toLowerCase();
        if (ch >= "a" && ch <= "z") {
            hasLetter = true;
        }
        if (ch >= "а" && ch <= "я") {
            hasLetter = true;
        }
    }
    if (hasLetter === false) {
        errors.push("Пароль должен содержать хотя бы одну букву");
    }
    return errors;
}

function checkPassword() {
    var password = document.getElementById("passInput").value;
    var result = document.getElementById("passResult");
    if (password === "") {
        result.innerHTML = "<span class='error-text'>Введите пароль</span>";
        return;
    }
    var errors = validatePassword(password);
    if (errors.length > 0) {
        result.innerHTML = "<span class='error-text'>" + errors.join("<br>") + "</span>";
    } else {
        result.innerHTML = "<span class='success-text'>Пароль надёжный!</span>";
    }
}


var menu = ["Главная", "Каталог", "О нас", "Контакты"];
function generateMenu(items) {
    var html = "<ul>";
    for (var i = 0; i < items.length; i++) {
        html = html + "<li><a href='#'>" + items[i] + "</a></li>";
    }
    html = html + "</ul>";
    return html;
}
function renderMenu() {
    var container = document.getElementById("menuContainer");
    container.innerHTML = generateMenu(menu);
}


var globalVar = "Глобальная переменная";
function showScope() {
    var localVar = "Локальная переменная";
    console.log("Внутри функции:");
    console.log("globalVar = " + globalVar);
    console.log("localVar = " + localVar);
    return "Внутри функции:\n"
        + "  globalVar = " + globalVar + " (доступна)\n"
        + "  localVar = " + localVar + " (доступна)\n";
}
function runScopeDemo() {
    var result = document.getElementById("scopeResult");
    var output = "";
    output += showScope();
    output += "\nСнаружи функции:\n";
    output += "  globalVar = " + globalVar + " (доступна)\n";
    output += "  localVar = Локальная переменная (недоступна)\n";

    console.log("Снаружи функции:");
    console.log("globalVar = " + globalVar);
    console.log("недоступна");
    result.textContent = output;

    runError();
}
function runError ()
{
    var output = "";
    output += localVar;
}