
var products = ['Ноутбук', 'Мышь', 'Клавиатура', 'Монитор'];

function renderCatalog() {
    var box = document.getElementById('cat1');
    box.innerHTML = '';
    for (var i = 0; i < products.length; i++) {
        box.innerHTML += '<div class="card">' + products[i] + '</div>';
    }
}
renderCatalog();


var products2 = ['Ноутбук', 'Мышь', 'Клавиатура', 'Монитор', 'Наушники', 'Микрофон'];

function searchProducts() {
    var val = document.getElementById('search2').value.toLowerCase();
    var found = products2.filter(function(p) {
        return p.toLowerCase().includes(val);
    });
    var box = document.getElementById('res2');
    box.innerHTML = '';
    if (found.length === 0 | found === null) {
        box.innerHTML = '<div class="card">Ничего не найдено</div>';
    } else {
        for (var i = 0; i < found.length; i++) {
            box.innerHTML += '<div class="card">' + found[i] + '</div>';
        }
    }
}


var users = [
    { id: 1, name: 'Анна' },
    { id: 2, name: 'Иван' },
    { id: 3, name: 'Олег' }
];

function findUser() {
    var id = Number(document.getElementById('uid').value);
    var user = users.find(function(u) { return u.id === id; });
    var box = document.getElementById('res3');
    if (user) {
        box.innerHTML = '<div class="card">Найден: ' + user.name + '</div>';
    } else {
        box.innerHTML = '<div class="card" style="color:red">Пользователь не найден!</div>';
    }
}


var prices = [500, 1200, 3000, 700];

(function() {
    var discounted = prices.map(function(p) { return (p * 0.9); });
    var labels = prices.map(function(p) { return p + ' ₽'; });
    var box = document.getElementById('res4');
    var html = '<b>Исходные цены:</b>';
    for (var i = 0; i < labels.length; i++) {
        html += '<div class="card">' + labels[i] + '</div>';
    }
    html += '<br><b>Цены со скидкой 10%:</b>';
    for (var i = 0; i < discounted.length; i++) {
        html += '<div class="card">' + discounted[i] + ' ₽</div>';
    }
    box.innerHTML = html;
})();


var tasks = [
    { id: 1, title: 'Сделать HTML', completed: true },
    { id: 2, title: 'Сделать CSS', completed: false },
    { id: 3, title: 'Сделать JS', completed: false }
];

function renderTasks(list) {
    var box = document.getElementById('res5');
    box.innerHTML = '';
    for (var i = 0; i < list.length; i++) {
        var cls = list[i].completed ? 'card done' : 'card';
        var mark = list[i].completed ? '+' : '-';
        box.innerHTML += '<div class="' + cls + '">' + mark + ' ' + list[i].title + '</div>';
    }
}

function showTasks(type) {
    if (type === 'done') {
        renderTasks(tasks.filter(function(t) { return t.completed; }));
    } else if (type === 'todo') {
        renderTasks(tasks.filter(function(t) { return !t.completed; }));
    } else {
        renderTasks(tasks);
    }
}
showTasks('all');


var cart = [
    { title: 'Мышь', price: 1000, count: 2 },
    { title: 'Клавиатура', price: 3000, count: 1 },
    { title: 'Монитор', price: 15000, count: 1 }
];

function getTotal() {
    var s = 0;
    for (var i = 0; i < cart.length; i++) s += cart[i].price * cart[i].count;
    return s;
}
function getTotalCount() {
    var c = 0;
    for (var i = 0; i < cart.length; i++) c += cart[i].count;
    return c;
}
function getExpensive() {
    var max = cart[0];
    for (var i = 1; i < cart.length; i++) {
        if (cart[i].price > max.price) max = cart[i];
    }
    return max;
}

(function() {
    var box = document.getElementById('res6');
    var html = '';
    for (var i = 0; i < cart.length; i++) {
        html += '<div class="card">' + cart[i].title + ' — ' + cart[i].price + ' ₽ × ' + cart[i].count + '</div>';
    }
    box.innerHTML = html;

    var exp = getExpensive();
    document.getElementById('totals6').innerHTML =
        'Общая сумма: <b>' + getTotal() + ' ₽</b><br>' +
        'Всего товаров: <b>' + getTotalCount() + '</b><br>' +
        'Самый дорогой: <b>' + exp.title + ' (' + exp.price + ' ₽)</b>';
})();


var goods = [
    { title: 'Мышь', price: 1000 },
    { title: 'Клавиатура', price: 3000 },
    { title: 'Монитор', price: 15000 },
    { title: 'Наушники', price: 2500 }
];

function renderGoods(list) {
    var box = document.getElementById('res7');
    box.innerHTML = '';
    for (var i = 0; i < list.length; i++) {
        box.innerHTML += '<div class="card">' + list[i].title + ' — ' + list[i].price + ' ₽</div>';
    }
}

function sortGoods(type) {
    var copy = goods.slice();
    if (type === 'asc') copy.sort(function(a, b) { return a.price - b.price; });
    if (type === 'desc') copy.sort(function(a, b) { return b.price - a.price; });
    renderGoods(copy);
}
sortGoods('def');