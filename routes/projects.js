var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')

/* GET users listing. */
router.post('/', async function(req, res, next) {
    await mongoose.model('Project').create({
        name : 'testing',
    })
    res.send('respond project post');
});

module.exports = router;
