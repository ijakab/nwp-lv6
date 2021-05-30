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


router.get('/add-member/:id', async function(req, res, next) {
    const users = await mongoose.model('User').find()
    res.render('add-member', { project: {id: req.params.id}, users });
});

router.post('/add-member', async function(req, res, next) {
    const project = await mongoose.model('Project').findById(req.body.id)
    project.participants = req.body.member
    await project.save()
    res.redirect('/projects');
});

router.get('/create', function(req, res, next) {
    res.render('single-project', { project: {members: []} });
});

router.get('/edit/:id', async function(req, res, next) {
    const single = await mongoose.model('Project')
        .findById(req.params.id)
        .populate('participants')
        .exec()
    res.render('single-project', {project: single});
});

router.get('/delete/:id', async function(req, res, next) {
    const single = await mongoose.model('Project').deleteOne({ _id: req.params.id })
    res.redirect('/projects');
});

router.post('/', async function(req, res, next) {
    if (req.body.id) {
        const doc = await mongoose.model('Project').findById(req.body.id)
        Object.assign(doc, req.body)
        await doc.save()
    } else {
        await mongoose.model('Project').create(req.body)
    }

    res.redirect('/projects')
});

module.exports = router;
