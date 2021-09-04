const express = require('express');
const bodyParser = require('body-parser');

// the APP
const app = express();

// ejs
app.set('view engine', 'ejs');
// use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/',(req,res)=>{
//     res.send('hello Express App..')
// })
app.get('/', (req, res) => {
  // res.send('hello Express App..')
  var inputData;

  res.render('list', {
    name: 'mt@sowa',
    btn: 'Clickable button',
    liItem: inputData,
  });
});

app.post('/', (req, res) => {
  inputData = req.body.todo;

  res.redirect('/');
});

app.listen(4000, function () {
  console.log('the port is functional...');
});
