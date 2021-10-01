const { homeItem,workItem, mongoose } = require('./databaseConnection');
const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// the APP
const app = express();

// ejs
app.set('view engine', 'ejs');
// use body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.use(express.json());


// %%%%%%%%%%%%%%%%%%%%%%%%   VARIABLES   %%%%%%%%%%%%%%%%%%%%%%%%%%%


// %%%%%%%%%%%%%%%%%%%%%%%% GET  REQUESTS %%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
app.get('/', (req, res) => {

  homeItem.find({},(err,data)=>{
    if(err){console.log(`ERROR : ${err}`)}else{
      res.render('list', {page: 'home',liItem: data});
    }
  }) ; //finds all home docs and render them into the ejs template file
});

app.get('/work', (req, res) => {
  workItem.find({},(err,data)=>{
    if(err){console.log(`ERROR : ${err}`)}else{
      res.render('list', {page: 'work',liItem: data});
    }
  });
});

app.get('/about',(req,res)=>{
  res.render('about');
})

// %%%%%%%%%%%%%%%%%%%%%%%% POST REQUESTS %%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

app.post('/', (req, res) => {
  console.log(req.body);
  if(req.body.todo === ''){
    return;
  }else{
    if (req.body.list === 'work') {
    const inpDat = req.body.todo;
    // insert....into DB
    workItem.create({name:inpDat});
    res.redirect('/work');
  } else {
    const inpData = req.body.todo;
    // insert....into DB
    homeItem.create({name:inpData})
    res.redirect('/');
  }
  }
});

app.post('/delete',(req,res)=>{
  if(req.body.page === 'home'){
    homeItem.findByIdAndRemove(req.body.dlt_btnID.toString(),(err)=>{
      if(!err){
        console.log('successfully deleted..... ')
        res.redirect('/')
      }
    })
  }else if(req.body.page === "work"){
    workItem.findByIdAndRemove(req.body.dlt_btnID.toString(),(err)=>{
      if(!err){
        console.log('successfully deleted..... ')
        res.redirect('/work')
      }
    })
  }

 
})




// // %%%%%%%%%%%%%%%%%%%%%%%%   DATABASE THINGS   %%%%%%%%%%%%%%%%%%%%%%%%%%%
//   // **database connection and creation...
// mongoose.connect('mongodb://127.0.0.1:27017/todoListDB',{useNewURLParser:true});
//   // **schema and collection creation..
// const homeSchema = mongoose.Schema({
//   name:String
// })
// const workSchema = mongoose.Schema({
//   name:String
// })

// const homeItem = mongoose.model('homeItem',homeSchema)
// const workItem = mongoose.model('workItem',workSchema)

// const firstHomeItem = new homeItem({
//   name:'second-Home'
// })
// const firstWorkItem = new workItem({
//   name:'second-Work'
// })

// firstHomeItem.save()
// firstWorkItem.save()


// %%%%%%%%%%%%%%%%%%%%%%%% END  DATABASE THINGS   %%%%%%%%%%%%%%%%%%%%%%%%%%%


app.listen(4000, function () {
  console.log('the port is functional...');
});
