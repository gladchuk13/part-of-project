const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Масив для зберігання даних
let items = [
    { id: 1, name: "JORDAN 5", price: "199 $", discount: "-33%", type: "SHOES", img: "./probyi.jpg" },
];

// Отримати всі товари
app.get('/api/items', (req, res) => {
    res.json(items);
});

// Додати новий товар
app.post('/api/items', (req, res) => {
    const newItem = req.body;
    newItem.id = items.length ? items[items.length - 1].id + 1 : 1;
    items.push(newItem);
    res.status(201).json(newItem);
});

// Запустити сервер
app.listen(port, () => {
    console.log(`Server running at http://localhost:3000/api/items`);
});
