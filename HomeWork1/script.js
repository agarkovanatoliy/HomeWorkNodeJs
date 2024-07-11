// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть
//     гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница,
//     на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров.
//      Значение счетчика должно увеличиваться на единицу каждый раз,
//      когда загружается страница.

const http = require("http");

let countFirst = 0;
let countSecond = 0;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    countFirst++;
    res.end(
      `<h1>Главная страница</h1>
      <a href="/about">Переход на страницу About</a>
      <p>Количество посещений страницы ${countFirst}</p>
      `
    );
  } else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    countSecond++;
    res.end(
      `<h1>Страница About</h1>
      <a href="/">Переход на страницу Главная</a>
      <p>Количество посещений страницы ${countSecond}</p>
      `
    );
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end(
      `<h1>Ошибка 404</h1>
      <p>Страница не существует</p>
      `
    );
  }
});

server.listen("3000");
