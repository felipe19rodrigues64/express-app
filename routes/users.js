// var express = require('express');
//var router = express.Router();

/* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respondendo GET users');
//});

//module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var t='Express Users';	
  if (req.query.title) {
  	t = req.query.title;
  	console.log("Passado parâmetro 'title'.");
  }
  res.render('users', { title: t });
});

module.exports = router;
