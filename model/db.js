var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@localhost/admin?authSource=admin', { useNewUrlParser: true });