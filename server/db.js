const mysql = require("mysql2");

const db = mysql.createConnection({
//   host: "93.125.9.73",
//   port: "2083",
  user: "openitby_hub",
  password: "gfhjkmjgtybnpf,12[f,56",
  database: "openitby_hub",
  host: '93.125.9.73',
  port: '2083',
  path: 'https://vh91.hoster.by:2083',
});

db.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });

 db.end(function(err) {
    if (err) {
      return console.log("Ошибка: " + err.message);
    }
    console.log("Подключение закрыто");
  });

module.exports = db;
