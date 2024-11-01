// // 실행 코드 : 쓸모 없는 존재

// const { error } = require("console");
// const express = require("express");
// const mysql = require('mysql');
// const app = express();
// var cookieParser = require('cookie-parser');
// app.use(cookieParser());
// var sql;

// var connection = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : 'c3dongtan',
//     database : 'user_db'
// });
// connection.connect();

// sql = cookies.get('sql')

// if (sql != "")
// {
//   connection.connect(function(err) {
//       console.log("Connected!");
//       connection.query(sq, function (error, result) {
//           console.log("1 record inserted");
//       });
//   });
//   sql = ""
//   Cookies.remove('sql');
// }

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });
// app.get('/:name', (req, res) => {
//     const { name } = req.params;
//     res.sendFile(__dirname + '/'+name);
// });

// app.use('/', express.static("./File"))

// app.listen(3000, ()=>{
//     console.log("server onload")
// })


// connection.end();