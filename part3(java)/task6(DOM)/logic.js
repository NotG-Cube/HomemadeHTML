var btn1 = document.getElementById('btn1');
var title1 = document.getElementById('title1');

btn1.addEventListener('click', function() {
    if (title1) {
        title1.textContent = 'Новый заголовок!';
    }
});


var btn2 = document.getElementById('btn2');
var card2 = document.getElementById('card2');

btn2.addEventListener('click', function() {
    card2.classList.toggle('card-active');
});


var btn3 = document.getElementById('btn3');
var input3 = document.getElementById('input3');
var list3 = document.getElementById('list3');

btn3.addEventListener('click', function() {
    var text = input3.value.trim();
    if (text === '') return;

    var li = document.createElement('li');
    li.textContent = text;
    list3.appendChild(li);
    input3.value = '';
});


var tasks4 = ['Сделать HTML', 'Сделать CSS', 'Сделать JS', 'Написать задачи'];
var list4 = document.getElementById('list4');

for (var i = 0; i < tasks4.length; i++) {
    var li = document.createElement('li');

    var span = document.createElement('span');
    span.textContent = tasks4[i];

    var delBtn = document.createElement('button');
    delBtn.textContent = 'Удалить';
    delBtn.addEventListener('click', function() {
        this.parentElement.remove();
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    list4.appendChild(li);
}


var products5 = [
    { title: 'Мышь', price: 1000 },
    { title: 'Клавиатура', price: 3000 },
    { title: 'Монитор', price: 15000 },
    { title: 'Наушники', price: 2500 }
];

function renderCatalog() {
    var box = document.getElementById('catalog5');
    box.innerHTML = '';  // очищаем перед отрисовкой

    for (var i = 0; i < products5.length; i++) {
        var card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = '<b>' + products5[i].title + '</b> — ' + products5[i].price + ' ₽';
        box.appendChild(card);
    }
}

renderCatalog();

document.getElementById('btn5').addEventListener('click', function() {
    renderCatalog();
});


var overlay6 = document.querySelector('#overlay6');
var btn6 = document.querySelector('#btn6');
var close6 = document.querySelector('#close6');

btn6.addEventListener('click', function() {
    overlay6.classList.add('open');
});

close6.addEventListener('click', function() {
    overlay6.classList.remove('open');
});

overlay6.addEventListener('click', function(e) {
    if (e.target === overlay6) {
        overlay6.classList.remove('open');
    }
});


var users7 = [
    { name: 'Анна', email: 'anna@mail.ru', role: 'admin' },
    { name: 'Борис', email: 'boris@mail.ru', role: 'user' },
    { name: 'Вера', email: 'vera@mail.ru', role: 'editor' },
    { name: 'Кот', email: 'kotenok@mail.ru', role: 'user' }
];

function renderTable() {
    var tbody = document.querySelector('#tbody7');
    tbody.innerHTML = '';

    for (var i = 0; i < users7.length; i++) {
        var tr = document.createElement('tr');

        var td1 = document.createElement('td');
        td1.textContent = users7[i].name;

        var td2 = document.createElement('td');
        td2.textContent = users7[i].email;

        var td3 = document.createElement('td');
        td3.textContent = users7[i].role;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
    }
}

renderTable();