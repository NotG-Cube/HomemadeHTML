function greet() {
    var name = document.getElementById("nameInput").value;
    var result = document.getElementById("result");
    if (name === "") {
        result.textContent = "Введите имя";
    } else {
        result.textContent = "Привет, " + name + "!";
    }
}



function calcDiscount() {
    var priceValue = document.getElementById("priceInput").value;
    var discountValue = document.getElementById("discountInput").value;
    var result = document.getElementById("discountResult");
    var price = Number(priceValue);
    var discount = Number(discountValue);
    if (priceValue === "" || discountValue === "" || isNaN(price) || isNaN(discount)) {
        result.textContent = "Ошибка: введите корректные числа";
        return;
    }
    var finalPrice = price - (price * discount / 100);
    result.textContent = "Итоговая цена: " + finalPrice + " ₽";
}



function checkAge() {
    var ageValue = document.getElementById("ageInput").value;
    var result = document.getElementById("ageResult");
    if (ageValue === "") {
        result.textContent = "Ошибка: введите возраст";
        return;
    }
    var age = Number(ageValue);
    if (isNaN(age) || age < 0 || age >= 110) {
        result.textContent = "Ошибка: введите корректный возраст";
        return;
    }
    if (age < 18) {
        result.textContent = "Доступ запрещён";
    } else if (age <= 59) {
        result.textContent = "Доступ разрешён";
    } else {
        result.textContent = "Льготная категория";
    }
}

function validateForm() {
    var name = document.getElementById("reg-name").value;
    var email = document.getElementById("reg-email").value;
    var password = document.getElementById("reg-password").value;
    var result = document.getElementById("regResult");
    var errors = "";
    if (name === "") {
        errors = errors + "Заполните имя\n";
    }
    if (email === "") {
        errors = errors + "Заполните email\n";
    }
    if (password === "") {
        errors = errors + "Заполните пароль\n";
    }
    if (errors !== "") {
        result.innerHTML = "<span class='error-text'>" + errors.replace(/\n/g, "<br>") + "</span>";
    } else {
        result.innerHTML = "<span class='success-text'>Проверка пройдена успешно!</span>";
    }
    return false;
}

function checkPrice() {
    var priceValue = document.getElementById("priceCheck").value;
    var result = document.getElementById("priceResult");
    if (priceValue === "") {
        result.textContent = "Ошибка: введите цену";
        return;
    }
    var price = Number(priceValue);
    if (isNaN(price)) {
        result.textContent = "Ошибка: введите корректное число";
        return;
    }
    if (price < 0) {
        result.textContent = "Ошибка: цена не может быть отрицательной";
    } else if (price === 0) {
        result.textContent = "Бесплатно";
    } else if (price < 1000) {
        result.textContent = "Дешёвый товар";
    } else if (price <= 10000) {
        result.textContent = "Обычный товар";
    } else {
        result.textContent = "Дорогой товар";
    }
}

var isOn = false;
function toggle() {
    var result = document.getElementById("toggleResult");
    if (isOn === false) {
        isOn = true;
        result.textContent = "Включено";
        result.className = "result state-on";
    } else {
        isOn = false;
        result.textContent = "Выключено";
        result.className = "result state-off";
    }
}
