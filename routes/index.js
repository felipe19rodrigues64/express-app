var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var t='Express Server';	
  if (req.query.title) {
  	t = req.query.title;
  	console.log("Passado parâmetro 'title'.");
  }
  res.render('index', { title: t });
});

module.exports = router;
