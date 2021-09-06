const express = require('express');
// const bodyParser = require('body-parser');

// the APP
const app = express();

// ejs
app.set('view engine', 'ejs');
// use body-parser
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// %%%%%%%%%%%%%%%%%%%%%%%% VARIABLES %%%%%%%%%%%%%%%%%%%%%%%%%%%
var inputData = [];
const todoItems = ['one', 'two', 'three'];

// %%%%%%%%%%%%%%%%%%%%%%%% GET  REQUESTS %%%%%%%%%%%%%%%%%%%%%%%%%%%
app.get('/', (req, res) => {
  res.render('list', {
    name: 'mt@sowa',
    btn: 'Clickable button',
    liItem: inputData,
  });
});

// %%%%%%%%%%%%%%%%%%%%%%%% POST REQUESTS %%%%%%%%%%%%%%%%%%%%%%%%%%%
app.post('/', (req, res) => {
  const inpData = req.body.todo;
  inputData = [...inputData, inpData];

  res.redirect('/');
});

app.listen(4000, function () {
  console.log('the port is functional...');
});
