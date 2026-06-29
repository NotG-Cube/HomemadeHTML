const user1 = {
    id: 1,
    name: 'Алексей',
    age: 25,
    email: 'alex@example.com',
    role: 'student'
};

const box1 = document.getElementById('res1');
box1.innerHTML = `
  <div class="card">
    <h3>Профиль: ${user1.name} (ID: ${user1.id})</h3>
    <p>Возраст: ${user1.age} лет</p>
    <p>Email: ${user1.email}</p>
    <p>Роль: ${user1.role}</p>
  </div>`;

//Задача 2 
const product = {
    title: 'Ноутбук',
    price: 70000,
    specs: {
        cpu: 'Intel Core i5',
        ram: '16 GB',
        storage: '512 GB SSD'
    }
};

const box2 = document.getElementById('res2');
box2.innerHTML = `
  <div class="card">
    <h3>${product.title}</h3>
    <p><b>Цена:</b> ${product.price} ₽</p>
    <h4>Характеристики:</h4>
    <ul>
      <li><b>Процессор:</b> ${product.specs.cpu}</li>
      <li><b>Оперативная память:</b> ${product.specs.ram}</li>
      <li><b>Накопитель:</b> ${product.specs.storage}</li>
    </ul>
  </div>`;

//Задача 3
const usersList = [
    { id: 1, name: 'Иван', email: 'ivan@mail.ru', role: 'admin', active: true },
    { id: 2, name: 'Мария', email: 'masha@mail.ru', role: 'editor', active: false },
    { id: 3, name: 'Пётр', email: 'petr@mail.ru', role: 'user', active: true }
];

const box3 = document.getElementById('res3');
for (const u of usersList) {
    const cls = u.active ? 'card active-user' : 'card unactive-user';
    const status = u.active ? '<span class="badge">Активен</span>' : '<span class="anti-badge">Неактивен</span>';

    box3.innerHTML += `
    <div class="${cls}">
      <h3>${u.name} ${status}</h3>
      <p>Email: ${u.email} | Роль: ${u.role}</p>
    </div>`;
}

//Задача 4
const user4 = {
    id: 42,
    name: 'Дмитрий',
    email: 'dima@test.com',
    role: 'developer'
};

const { name, email, role } = user4;

document.getElementById('res4').innerHTML = `
  <div class="card">
    <p><b>Имя:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Роль:</b> ${role}</p>
  </div>`;

// Задача 5 
const item5 = {
    title: 'Беспроводные наушники',
    price: 4990,
    category: 'Аудио',
    description: 'Удобные наушники с отличным звуком и шумоподавлением.'
};

const box5 = document.getElementById('res5');
box5.innerHTML = `
  <div class="card">
    <small style="color: #666;">Категория: ${item5.category}</small>
    <h3 style="margin-top: 5px;">${item5.title}</h3>
    <p>${item5.description}</p>
    <p style="font-size: 18px;"><b>Цена: ${item5.price} ₽</b></p>
    <button>Купить</button>
  </div>`;

//Задача 6 
const order = {
    number: 'A-1001',
    date: '2026-05-31',
    client: {
        name: 'Иван Петров',
        email: 'ivan@example.com'
    },
    items: [
        { title: 'Мышь', price: 1000, count: 2 },
        { title: 'Клавиатура', price: 3000, count: 1 }
    ]
};

let sum = 0;
let tableRows = '';

for (const item of order.items) {
    const itemTotal = item.price * item.count;
    sum += itemTotal;
    tableRows += `<tr>
      <td>${item.title}</td>
      <td>${item.price} ₽</td>
      <td>${item.count} шт.</td>
      <td>${itemTotal} ₽</td>
    </tr>`;
}

document.getElementById('res6').innerHTML = `
  <div class="card">
    <h3>Заказ № ${order.number} <small style="font-size: 14px; font-weight: normal;">от ${order.date}</small></h3>
    <p><b>Клиент:</b> ${order.client.name} (${order.client.email})</p>
    
    <table>
      <thead>
        <tr>
          <th>Товар</th>
          <th>Цена</th>
          <th>Кол-во</th>
          <th>Сумма</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>
    
    <h3 style="text-align: right; margin-top: 15px;">Итого к оплате: ${sum} ₽</h3>
  </div>`;