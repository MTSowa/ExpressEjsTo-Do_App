const express = require('express');
// const bodyParser = require('body-parser');

// the APP
const app = express();

// ejs
app.set('view engine', 'ejs');
// use body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.use(express.json());

// %%%%%%%%%%%%%%%%%%%%%%%%   VARIABLES   %%%%%%%%%%%%%%%%%%%%%%%%%%%
let inputData = [];
let todoItems = [];

// %%%%%%%%%%%%%%%%%%%%%%%% GET  REQUESTS %%%%%%%%%%%%%%%%%%%%%%%%%%%
app.get('/', (req, res) => {
  res.render('list', {
    page: 'home',
    liItem: inputData,
  });
});
app.get('/work', (req, res) => {
  res.render('list', {
    page: 'work',
    liItem: todoItems,
  });
});
app.get('/about',(req,res)=>{
  res.render('about');
})

// %%%%%%%%%%%%%%%%%%%%%%%% POST REQUESTS %%%%%%%%%%%%%%%%%%%%%%%%%%%
app.post('/', (req, res) => {
  console.log(req.body);
  if(req.body.todo === ''){
    return;
  }else{
    if (req.body.list === 'work') {
    const inpDat = req.body.todo;
    todoItems = [...todoItems, inpDat];

    res.redirect('/work');
  } else {
    const inpData = req.body.todo;
    inputData = [...inputData, inpData];

    res.redirect('/');
  }
  }
});
// app.post('/work', (req, res) => {
//   const inpDat = req.body.todo;
//   todoItems = [...todoItems, inpDat];

//   res.redirect('/work');
// });

app.listen(4009, function () {
  console.log('the port is functional...');
});
