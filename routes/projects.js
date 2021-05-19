var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')

router.get('/', async function(req, res, next) {
    const data = await mongoose.model('Project').find()
    res.render('list-projects', {projects: data});
});

router.get('/json', async function(req, res, next) {
    const data = await mongoose.model('Project').find()
    res.send(JSON.stringify(data))
});


router.get('/create', function(req, res, next) {
    res.render('single-project', { title: 'Unesi novi projek' });
});

router.get('/edit/:id', async function(req, res, next) {
    const single = await mongoose.model('Project').findById(req.params.id)
    res.send(JSON.stringify(single));
});

router.post('/', async function(req, res, next) {
    await mongoose.model('Project').create(req.body)
    res.redirect('/projects/create')
});

module.exports = router;
