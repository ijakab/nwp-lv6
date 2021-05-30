var mongoose = require('mongoose');  
var blobSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: Number,
});
mongoose.model('User', blobSchema);