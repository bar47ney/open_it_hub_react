require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(cors());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(PORT);

const app2 = express();

const PORT2 = process.env.PORT2 || 8081;

const transporter = nodemailer.createTransport({
  host: "smtp.yandex.ru",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: `${process.env.MAIL}`, // generated ethereal user
    pass: `${process.env.PASS_MAIL}` // generated ethereal password
  }
});

app2.use(cors());
app2.post("/api", (req, res) => {
  transporter.sendMail({
    from: `"Marmelade-store" <${process.env.MAIL}>`,
    to: `bar47ney@gmail.com, bar47ney@gmail.com`,
    subject: "Marmelade-store: сведения о заказе",
    text: "Ваш заказ был успешно оформлен!",
    html: `<p><strong>bar47ney@gmail.com</strong>, ваш заказ был сформирован!<br/>Вы заказали <strong>bar47ney@gmail.com
    }</strong> в количестве <strong>bar47ney@gmail.com</strong>.<br/>
    Общая стоимсость составила: <strong>$bar47ney@gmail.comBYN</strong>.<br/>Спасибо, что выбрали нас!</p>`,
  });

  res.json({ a: 1, b: 2 });
});

app2.listen(PORT2);

// app2.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build", "index.html"))
//   // res.send("Hello");
// });

// const express = require("express");
// const db = require("./db");
// const cors = require("cors");

// const app = express();
// const PORT = 3002;
// app.use(cors());
// app.use(express.json());

// Route to get all posts
// app.get("/api", (req, res) => {
//   db.query("SELECT * FROM event ", (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
//     res.send(result);
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on ＄{PORT}`);
// });

// Route to get one post
// app.get("/api/getFromId/:id", (req,res)=>{

// const id = req.params.id;
//  db.query("SELECT * FROM posts WHERE id = ?", id,
//  (err,result)=>{
//     if(err) {
//     console.log(err)
//     }
//     res.send(result)
//     });   });

// // Route for creating the post
// app.post('/api/create', (req,res)=> {

// const username = req.body.userName;
// const title = req.body.title;
// const text = req.body.text;

// db.query("INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)",[title,text,username], (err,result)=>{
//    if(err) {
//    console.log(err)
//    }
//    console.log(result)
// });   })

// // Route to like a post
// app.post('/api/like/:id',(req,res)=>{

// const id = req.params.id;
// db.query("UPDATE posts SET likes = likes + 1 WHERE id = ?",id, (err,result)=>{
//     if(err) {
//    console.log(err)   }
//    console.log(result)
//     });
// });

// // Route to delete a post

// app.delete('/api/delete/:id',(req,res)=>{
// const id = req.params.id;

// db.query("DELETE FROM posts WHERE id= ?", id, (err,result)=>{
// if(err) {
// console.log(err)
//         } }) })
