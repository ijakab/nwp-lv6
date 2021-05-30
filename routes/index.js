var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { register: true, login: true });
});

router.post('/register', function(req, res, next) {
  res.render('index', { login: true, register: false });
});

module.exports = router;
