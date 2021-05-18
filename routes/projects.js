var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')

router.get('/create', function(req, res, next) {
    res.render('single-project', { title: 'Unesi novi projek' });
});

router.post('/', async function(req, res, next) {
    await mongoose.model('Project').create({
        name : 'testing',
    })
    res.send('respond project post');
});

module.exports = router;
