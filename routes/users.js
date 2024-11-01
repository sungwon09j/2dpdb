var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
// var mysql = require('mysql');
app.use(bodyParser.urlencoded({ extended: false }));

/* GET users listing. */
// router.post('/join', (req, res) => {
//   res.render('join')
// });

// router.post('/join', (req, res) => {
//     console.log(req.body.id);
//     console.log(req.body.pw);
// });

// router.get('/join', function (req, res) {
//   res.render('join');
// });

app.post('/join', function(req, res) {
  var id = req.body.id;
  res.send("id: " + id);
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
