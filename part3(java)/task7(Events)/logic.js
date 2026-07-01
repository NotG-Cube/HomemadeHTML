var count = 0;
document.getElementById('countBtn').onclick = function() {
  count++;
  document.getElementById('countVal').textContent = count;
};


// Задача 2 
document.getElementById('liveInput').oninput = function() {
  var val = this.value;
  document.getElementById('liveOutput').textContent = val === '' ? 'Начните вводить текст...' : val;
};


// Задача 3
document.getElementById('regForm').onsubmit = function(e) {
  e.preventDefault();
  var name = document.getElementById('regName').value.trim();
  var email = document.getElementById('regEmail').value.trim();
  var pass = document.getElementById('regPass').value.trim();
  var errors = [];
  if (!name) errors.push('Введите имя');
  if (!email) {
    errors.push('Введите email');
  } else {
    if (/[а-яёА-ЯЁ]/.test(email)) errors.push('Email не должен содержать кириллицу');
    if (email.indexOf('@') === -1) errors.push('Email должен содержать @');
    if (email.indexOf('@') !== -1) {
      var afterAt = email.split('@')[1];
      if (!afterAt || afterAt.length === 0) errors.push('После @ должны быть символы');
      else if (afterAt.indexOf('.') === -1) errors.push('Домен должен содержать точку');
      else if (afterAt.split('.').pop().length < 2) errors.push('После точки минимум 2 символа');
    }
  }

  if (!pass) errors.push('Введите пароль');
  if (pass && pass.length < 6) errors.push('Пароль минимум 6 символов');
  document.getElementById('regErrors').innerHTML = '';
  document.getElementById('regResult').innerHTML = '';
  if (errors.length > 0) {
    document.getElementById('regErrors').innerHTML = errors.map(function(er) {
      return '<p class="error">' + er + '</p>';
    }).join('');
  } else {
    document.getElementById('regResult').innerHTML =
      '<p><b>Имя:</b> ' + name + '</p>' +
      '<p><b>Email:</b> ' + email + '</p>' +
      '<p><b>Пароль:</b> ' + '*'.repeat(pass.length) + '</p>';
  }
};

// Задача 4
var todos = [];
function renderTodos() {
  var html = '';
  for (var i = 0; i < todos.length; i++) {
    html += '<div class="card">' +
      '<span class="' + (todos[i].done ? 'done' : '') + '">' + todos[i].text + '</span>' +
      '<span>' +
        '<button onclick="toggleTodo(' + i + ')">' + (todos[i].done ? 'Отменить' : 'Готово') + '</button> ' +
        '<button onclick="deleteTodo(' + i + ')">Удалить</button>' +
      '</span></div>';
  }
  document.getElementById('todoList').innerHTML = html;
  document.getElementById('todoTotal').textContent = todos.length;
  var doneCount = 0;
  for (var j = 0; j < todos.length; j++) {
    if (todos[j].done) doneCount++;
  }
  document.getElementById('todoDone').textContent = doneCount;
}
document.getElementById('todoAdd').onclick = function() {
  var val = document.getElementById('todoInput').value.trim();
  if (val === '') return;
  todos.push({ text: val, done: false });
  document.getElementById('todoInput').value = '';
  renderTodos();
};
function toggleTodo(i) {
  todos[i].done = !todos[i].done;
  renderTodos();
}
function deleteTodo(i) {
  todos.splice(i, 1);
  renderTodos();
}


// Задача 5
var cardsData = ['Телефон', 'Ноутбук', 'Наушники', 'Планшет'];
function renderCards() {
  var html = '';
  for (var i = 0; i < cardsData.length; i++) {
    html += '<div class="card" data-name="' + cardsData[i] + '">' +
      '<span>' + cardsData[i] + '</span>' +
      '<span><button class="buy-btn">В корзину</button> <button class="del-btn">Удалить</button></span>' +
      '</div>';
  }
  document.getElementById('cards').innerHTML = html;
}
renderCards();
document.getElementById('cards').onclick = function(e) {
  var card = e.target.closest('.card');
  if (!card) return;
  var name = card.getAttribute('data-name');
  if (e.target.closest('.del-btn')) {
    card.remove();
  }
  if (e.target.closest('.buy-btn')) {
    document.getElementById('cartMsg').innerHTML = '<p>Добавлено: <b>' + name + '</b></p>';
  }
};
document.getElementById('resetCards').onclick = function() {
  renderCards();
  document.getElementById('cartMsg').innerHTML = '';
};


//Задача 6
var products = [
  { name: 'iPhone 15', cat: 'phone', price: 999 },
  { name: 'Samsung Galaxy', cat: 'phone', price: 799 },
  { name: 'MacBook Pro', cat: 'laptop', price: 1999 },
  { name: 'Lenovo ThinkPad', cat: 'laptop', price: 1200 },
  { name: 'Чехол', cat: 'acc', price: 29 },
  { name: 'Зарядка', cat: 'acc', price: 49 },
  { name: 'AirPods', cat: 'acc', price: 199 },
  { name: 'Dell XPS', cat: 'laptop', price: 1500 }
];
function renderFilter() {
  var search = document.getElementById('filterSearch').value.toLowerCase();
  var cat = document.getElementById('filterCat').value;
  var sort = document.getElementById('filterSort').value;
  var list = products.filter(function(p) {
    var matchSearch = p.name.toLowerCase().indexOf(search) !== -1;
    var matchCat = cat === 'all' || p.cat === cat;
    return matchSearch && matchCat;
  });
  if (sort === 'price-asc') list.sort(function(a, b) { return a.price - b.price; });
  if (sort === 'price-desc') list.sort(function(a, b) { return b.price - a.price; });
  if (sort === 'name-asc') list.sort(function(a, b) { return a.name.localeCompare(b.name); });
  var html = '';
  for (var i = 0; i < list.length; i++) {
    html += '<div class="card"><span>' + list[i].name + '</span><span>' + list[i].price + '$</span></div>';
  }
  if (list.length === 0) html = '<p>Ничего не найдено</p>';
  document.getElementById('filterList').innerHTML = html;
}
document.getElementById('filterSearch').oninput = renderFilter;
document.getElementById('filterCat').onchange = renderFilter;
document.getElementById('filterSort').onchange = renderFilter;
renderFilter();


// Задача 7
var catalog = [
  { id: 1, name: 'Монитор', price: 300 },
  { id: 2, name: 'Клавиатура', price: 80 },
  { id: 3, name: 'Мышка', price: 40 },
  { id: 4, name: 'Веб-камера', price: 120 },
  { id: 5, name: 'Колонки', price: 60 }
];
var basket = [];
function renderCatalog() {
  var html = '';
  for (var i = 0; i < catalog.length; i++) {
    html += '<div class="card">' +
      '<span>' + catalog[i].name + ' — ' + catalog[i].price + '$</span>' +
      '<button onclick="addToBasket(' + catalog[i].id + ')">В корзину</button>' +
      '</div>';
  }
  document.getElementById('catalog').innerHTML = html;
}
function addToBasket(id) {
  var product = null;
  for (var i = 0; i < catalog.length; i++) {
    if (catalog[i].id === id) product = catalog[i];
  }
  var found = null;
  for (var j = 0; j < basket.length; j++) {
    if (basket[j].id === id) found = basket[j];
  }
  if (found) {
    found.qty++;
  } else {
    basket.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
  }
  renderBasket();
}
function changeQty(id, delta) {
  for (var i = 0; i < basket.length; i++) {
    if (basket[i].id === id) {
      basket[i].qty += delta;
      if (basket[i].qty <= 0) basket.splice(i, 1);
      break;
    }
  }
  renderBasket();
}
function removeFromBasket(id) {
  for (var i = 0; i < basket.length; i++) {
    if (basket[i].id === id) {
      basket.splice(i, 1);
      break;
    }
  }
  renderBasket();
}
function renderBasket() {
  var html = '';
  var total = 0;
  for (var i = 0; i < basket.length; i++) {
    var item = basket[i];
    var sum = item.price * item.qty;
    total += sum;
    html += '<div class="cart-item">' +
      '<span>' + item.name + ' x' + item.qty + ' = ' + sum + '$</span>' +
      '<span>' +
        '<button onclick="changeQty(' + item.id + ', -1)">−</button> ' +
        '<button onclick="changeQty(' + item.id + ', 1)">+</button> ' +
        '<button onclick="removeFromBasket(' + item.id + ')">Удалить</button>' +
      '</span></div>';
  }
  if (basket.length === 0) html = '<p>Корзина пуста</p>';
  document.getElementById('basket').innerHTML = html;
  document.getElementById('basketTotal').textContent = total;
}
renderCatalog();
renderBasket();