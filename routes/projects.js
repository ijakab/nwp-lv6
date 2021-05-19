var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')

router.get('/create', function(req, res, next) {
    res.render('single-project', { title: 'Unesi novi projek' });
});

router.post('/', async function(req, res, next) {
    await mongoose.model('Project').create(req.body)
    res.redirect('/projects/create')
});

module.exports = router;
