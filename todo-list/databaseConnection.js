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

const customSchema = mongoose.Schema({
  name:String,
  todoItems:[homeSchema], //an array of todo-items
})

const homeItem = mongoose.model('homeItem',homeSchema)
const workItem = mongoose.model('workItem',workSchema)
const customItem = mongoose.model('customItem',customSchema)

//example of home's to-do items
const todo1 = new homeItem({name:'frontEnd Dev'})
const todo2 = new homeItem({name:'backend Dev'})
const todo3 = new homeItem({name:'Fullstack Dev'})

const sampleTodos = [todo1,todo2,todo3];

module.exports = {
    mongoose:mongoose,
    homeItem:homeItem,
    workItem:workItem,
    customItem:customItem,
    sampleTodos:sampleTodos,
}