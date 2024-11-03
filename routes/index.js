var express = require('express');
var bodyparser = require('body-parser');
var cookieParser = require('cookie-parser');
var router = express.Router();
var db = require('../config/mysql');
var conn = db.init();
var body = "";


/* GET home page. */

router.get('/', function (req, res) {
  res.redirect("/5/5");
});

router.get('/:row/:col', function(req, res, next) {
//  res.render('index', { title: 'Express' });
  const {row, col} = req.params;
  res.render('Board', {row: row, col: col});
});

router.get('/own', function(req, res, next) {
  console.log(body)
  if(body == "")
  {
    res.render('Board', {row: "change", col: "change"});
  }
  res.render('Own', {length: body.length, pictureName: body.pictureName, id: body.id});
  console.log('sisi')
});

router.get('/:name', function (req, res) {
  const { name } = req.params;
  res.render(name);

});

router.post('/saveBoard', function(req, res) {
  body = req.body;
  console.log(body);
  console.log("mangham");
  let sql = 'INSERT INTO picture (name, pictureName, colors, rowNum, colNum) VALUE (?, ?, ?, ?, ?)';
  let params = [body.name, body.pictureName, JSON.stringify(body.data), body.rows, body.cols];
  conn.query(sql, params, (err, rslt) => {
    if(err)
      console.log('query does not execured '+ err);
    else {
      res.json({res:"OK Good"});
    }
  });
})

router.post('/JJoin', function(req, res) {
  body = req.body;
  let sql = 'INSERT INTO user (name, password) VALUE (?, ?)';
  let params = [body.id, body.pw];
  console.log(body.id, body.pw);
  conn.query(sql, params, (err, rslt) => {
    if(err)
      console.log('query does not execured '+ err);
    else {
      res.json({res:"OK Good"});
    }
  });
})

router.post('/bringBoard', function(req, res) {
  body = req.body
  let sql = 'select * from picture where id = ? ';
  conn.query(sql, body.id, (err, rslt) => {
    if(err)
      console.log('query does not execured '+ err);
    else {
      console.log(rslt);
      res.send({row: rslt.rowNum, col: rslt.colNum, res: rslt});
    }
  });
})

router.post('/LLogin', function(req, res) {
  body = req.body;
  let sql = 'SELECT * FROM user WHERE name = ? and password = ?';
  let params = [body.id, body.pw];
  console.log(body.id, body.pw);
  conn.query(sql, params, (err, rslt) => {
    if(err)
      console.log('query does not execured '+ err);
    else {
      console.log(rslt)
      if(rslt == ''){
        res.json({res:"로그인 실패", id:""});
      }
      else {
        res.json({res:"로그인 성공", id:rslt[0].name});
      }
    }
  });
})

router.post('/MyPicture', function(req, res) {
  body = req.body
  let sql = 'SELECT * FROM picture WHERE name = ?';
  conn.query(sql, body.id, (err, rslt) => {
    if(err)
      console.log('query does not execured '+ err);
    else {
      console.log(rslt);
      res.send({res: rslt});
    }
  });
})

router.post('/GoOwn', function(req, res) {
  body = req.body;
})

router.post('/Logout', function(req, res) {
  body = "";
  console.log("clear")
})

router.post('/deleteBoard', function(req, res) {
  body = req.body
  let sql = 'delete from picture where id = ? ';
  conn.query(sql, body.id, (err, rslt) => {
    if(err)
      console.log('query does not execured '+ err);
    else {
      res.send({res : "ㅅㄱ"});
    }
  });
})


module.exports = router;
