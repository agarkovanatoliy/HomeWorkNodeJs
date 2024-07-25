const express = require("express");
const fs = require("fs");

const app = express();

let counter = 0;

// Чтение значения счетчика из файла
fs.readFile("counter.txt", "utf8", (err, data) => {
  if (!err) {
    counter = parseInt(data);
  }
});

// Обработчик для главной страницы
app.get("/", (req, res) => {
  counter++;
  fs.writeFile("counter.txt", counter.toString(), (err) => {
    if (err) {
      console.error(err);
    }
  });
  res.send(`<h1>Добро пожаловать на сайт!</h1>
            <h3>Просмотров - ${data.countMain}</h3>
            <a href="/about">Сcылка на страницу About</a>`);
});

// Обработчик для страницы "About"
app.get("/about", (req, res) => {
  counter++;
  fs.writeFile("counter.txt", counter.toString(), (err) => {
    if (err) {
      console.error(err);
    }
  });
  res.send(`<h1>Добро пожаловать на страницу About!</h1>
            <h3>Просмотров - ${data.countAbout}</h3>
            <a href="/">Сcылка на главную страницу</a>`);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
