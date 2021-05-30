var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { register: true, login: true });
});

router.post('/register', async function(req, res, next) {
  await mongoose.model('User').create(req.body)
  res.render('index', { login: true, register: false });
});

module.exports = router;
