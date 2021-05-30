var mongoose = require('mongoose')
const Schema = mongoose.Schema

var blobSchema = new mongoose.Schema({  
  name: String,
  description: String,
  price: Number,
  workdone: String,
  start: Date,
  end: Date,
  participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  leader: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('Project', blobSchema);

async function bla() {
  console.log('eeeeee')
  const debugData = await mongoose.model('Project').find({
    'participants': '60b3c02778b1150a421016d2'
  }).populate('leader').populate('participants').exec()
  console.log(debugData);
}

bla().catch(console.error)
