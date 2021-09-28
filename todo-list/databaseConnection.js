const mongoose = require('mongoose');

// %%%%%%%%%%%%%%%%%%%%%%%%   DATABASE THINGS   %%%%%%%%%%%%%%%%%%%%%%%%%%%
  // **database connection and creation...
  mongoose.connect('mongodb://127.0.0.1:27017/todoListDB',{useNewURLParser:true});
  // **schema and collection creation..
const homeSchema = mongoose.Schema({
  name:String
})
const workSchema = mongoose.Schema({
  name:String
})

const homeItem = mongoose.model('homeItem',homeSchema)
const workItem = mongoose.model('workItem',workSchema)



module.exports = {
    mongoose:mongoose,
    homeItem:homeItem,
    workItem:workItem
}