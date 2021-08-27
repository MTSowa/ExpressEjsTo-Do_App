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

  res.render('list', { name: 'mt@sowa', btn: 'Clickable button' });
});

app.post('/', (req, res) => {
  const inputData = req.body.todo;
  console.log(`item posted.. ${inputData}`);
});

app.listen(4000, function () {
  console.log('the port is functional...');
});
