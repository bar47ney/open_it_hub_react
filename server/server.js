// const express = require("express");
// const path = require("path");

// const PORT = process.env.PORT || 8080;

// const app = express();
// // app.use(express.static(__dirname));
// app.use(express.static(path.resolve(__dirname, "build")));

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "build", "index.html"))
// })

// app.listen(PORT)

const express = require("express");
const db = require("./db");
const cors = require("cors");

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json());

// Route to get all posts
app.get("/", (req, res) => {
    res.send(`Server is running on ＄{PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on ＄{PORT}`);
});

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
