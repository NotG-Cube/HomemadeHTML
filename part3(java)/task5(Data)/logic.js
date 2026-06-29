var products1 = [
  { title: 'Мышь', price: 1000, category: 'Периферия' },
  { title: 'Монитор', price: 15000, category: 'Техника' }
];

var prepared1 = products1.map(function(p) {
  return {
    priceText: p.price + ' ₽',
    categoryText: 'Категория: ' + p.category,
    label: p.title + ' — ' + p.price + ' ₽ (' + p.category + ')'
  };
});

var box1 = document.getElementById('res1');
var html1 = '';
for (var i = 0; i < prepared1.length; i++) {
  html1 += `
    <div class="card">
      <p><b>${prepared1[i].label}</b></p>
      <p>${prepared1[i].priceText}</p>
      <p>${prepared1[i].categoryText}</p>
    </div>`;
}
box1.innerHTML = html1;


//Задача 2 
var categories2 = ['Периферия', 'Техника', 'Аксессуары'];
var products2 = [
  { title: 'Мышь', price: 1000, category: 'Периферия' },
  { title: 'Клавиатура', price: 3000, category: 'Периферия' },
  { title: 'Монитор', price: 15000, category: 'Техника' },
  { title: 'Ноутбук', price: 50000, category: 'Техника' },
  { title: 'Наушники', price: 2500, category: 'Периферия' }
];

var box2 = document.getElementById('res2');
var html2 = '';

for (var i = 0; i < categories2.length; i++) {
  var cat = categories2[i];
  var filtered = products2.filter(function(p) {
    return p.category === cat;
  });

  html2 += `<div class="category-title">${cat}</div>`;

  if (filtered.length === 0) {
    html2 += '<div class="card">Товаров нет</div>';
  } else {
    for (var j = 0; j < filtered.length; j++) {
      html2 += `<div class="card">${filtered[j].title} — ${filtered[j].price} ₽</div>`;
    }
  }
}
box2.innerHTML = html2;


// Задача 3
var users3 = [
  { id: 1, name: 'Анна', email: 'anna@mail.ru', role: 'admin', active: true },
  { id: 2, name: 'Борис', email: 'boris@mail.ru', role: 'user', active: false },
  { id: 3, name: 'Вера', email: 'vera@mail.ru', role: 'admin', active: true },
  { id: 4, name: 'Глеб', email: 'gleb@mail.ru', role: 'user', active: true },
  { id: 5, name: 'Дина', email: 'dina@mail.ru', role: 'editor', active: false }
];

var activeUsers = users3.filter(function(u) { return u.active; });
var admins = users3.filter(function(u) { return u.role === 'admin'; });
var emails = users3.map(function(u) { return u.email; });
var inactiveCount = users3.filter(function(u) { return !u.active; }).length;

var box3 = document.getElementById('res3');
var html3 = '<b>Активные пользователи:</b>';
for (var i = 0; i < activeUsers.length; i++) {
  html3 += `<div class="card">${activeUsers[i].name} — ${activeUsers[i].email}</div>`;
}

html3 += '<br><b>Администраторы:</b>';
for (var i = 0; i < admins.length; i++) {
  html3 += `<div class="card">${admins[i].name} (${admins[i].role})</div>`;
}

html3 += '<br><b>Все email-адреса:</b>';
html3 += `<div class="card">${emails.join(', ')}</div>`;

html3 += `<br><b>Неактивных пользователей: ${inactiveCount}</b>`;

box3.innerHTML = html3;


// Задача 4 
var orders4 = [
  {
    number: 'A-101',
    client: 'Иван Петров',
    status: 'Доставлен',
    items: [
      { title: 'Мышь', price: 1000, count: 2 },
      { title: 'Коврик', price: 500, count: 1 }
    ]
  },
  {
    number: 'A-102',
    client: 'Мария Сидорова',
    status: 'В обработке',
    items: [
      { title: 'Монитор', price: 15000, count: 1 },
      { title: 'Кабель HDMI', price: 800, count: 2 }
    ]
  },
  {
    number: 'A-103',
    client: 'Олег Козлов',
    status: 'Отменён',
    items: [
      { title: 'Клавиатура', price: 3000, count: 1 }
    ]
  }
];

var box4 = document.getElementById('res4');
var rows4 = '';

for (var i = 0; i < orders4.length; i++) {
  var order = orders4[i];

  var totalCount = 0;
  var totalSum = 0;
  for (var j = 0; j < order.items.length; j++) {
    totalCount += order.items[j].count;
    totalSum += order.items[j].price * order.items[j].count;
  }

  rows4 += `
    <tr>
      <td>${order.number}</td>
      <td>${order.client}</td>
      <td>${totalCount} шт.</td>
      <td>${totalSum} ₽</td>
      <td>${order.status}</td>
    </tr>`;
}

box4.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Номер</th>
        <th>Клиент</th>
        <th>Кол-во товаров</th>
        <th>Сумма</th>
        <th>Статус</th>
      </tr>
    </thead>
    <tbody>${rows4}</tbody>
  </table>`;



//Задача 5 

var allCats = [];
for (var i = 0; i < products2.length; i++) {
  if (allCats.indexOf(products2[i].category) === -1) {
    allCats.push(products2[i].category);
  }
}
var catSelect = document.getElementById('catSelect');
for (var i = 0; i < allCats.length; i++) {
  catSelect.innerHTML += `<option value="${allCats[i]}">${allCats[i]}</option>`;
}

function filterProducts(list, query, category) {
  return list.filter(function(p) {
    var matchName = p.title.toLowerCase().includes(query.toLowerCase());
    var matchCat = category === '' || p.category === category;
    return matchName && matchCat;
  });
}

function sortProducts(list, direction) {
  var copy = list.slice();
  if (direction === 'asc') copy.sort(function(a, b) { return a.price - b.price; });
  if (direction === 'desc') copy.sort(function(a, b) { return b.price - a.price; });
  return copy;
}

function renderProducts5(list) {
  var box = document.getElementById('res5');
  if (list.length === 0) {
    box.innerHTML = '<div class="card">Ничего не найдено</div>';
    return;
  }
  var html = '';
  for (var i = 0; i < list.length; i++) {
    html += `<div class="card"><b>${list[i].title}</b> — ${list[i].price} ₽ <small>(${list[i].category})</small></div>`;
  }
  box.innerHTML = html;
}

function updateCatalog() {
  var query = document.getElementById('searchInput').value;
  var category = document.getElementById('catSelect').value;
  var sort = document.getElementById('sortSelect').value;

  var result = filterProducts(products2, query, category);
  result = sortProducts(result, sort);
  renderProducts5(result);
}

updateCatalog();


// Задача 6
function filterByCategory(products, category) {
  return products.filter(function(p) { return p.category === category; });
}

function searchProducts(products, query) {
  return products.filter(function(p) {
    return p.title.toLowerCase().includes(query.toLowerCase());
  });
}

function sortByPrice(products, direction) {
  var copy = products.slice();
  if (direction === 'asc') copy.sort(function(a, b) { return a.price - b.price; });
  if (direction === 'desc') copy.sort(function(a, b) { return b.price - a.price; });
  return copy;
}

function formatProducts(products) {
  return products.map(function(p) {
    return p.title + ' — ' + p.price + ' ₽';
  });
}

function renderList(boxId, items) {
  var box = document.getElementById(boxId);
  var html = '';
  for (var i = 0; i < items.length; i++) {
    html += `<div class="card">${items[i]}</div>`;
  }
  box.innerHTML = html;
}

var periphery = filterByCategory(products2, 'Периферия');
renderList('res6a', formatProducts(periphery));

var found = searchProducts(products2, 'мо');
renderList('res6b', formatProducts(found));

var sorted = sortByPrice(products2, 'asc');
renderList('res6c', formatProducts(sorted));

var allFormatted = formatProducts(products2);
renderList('res6d', allFormatted);


// Задача 7
var rawProducts = [
  { name: 'mouse', price: 1000, available: true },
  { name: 'keyboard', price: 3000, available: false },
  { name: 'monitor', price: 15000, available: true },
  { name: 'headphones', price: 2500, available: false }
];

var uiProducts = rawProducts.map(function(p) {
  return {
    title: p.name[0].toUpperCase() + p.name.slice(1),
    priceText: p.price + ' ₽',
    statusText: p.available ? 'В наличии' : 'Нет в наличии',
    statusClass: p.available ? 'available' : 'unavailable'
  };
});

var box7 = document.getElementById('res7');
var html7 = '';
for (var i = 0; i < uiProducts.length; i++) {
  var item = uiProducts[i];
  html7 += `
    <div class="card">
      <h3>${item.title}</h3>
      <p>Цена: ${item.priceText}</p>
      <p class="${item.statusClass}">${item.statusText}</p>
    </div>`;
}
box7.innerHTML = html7;