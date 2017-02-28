const express = require('express')

var app = express();

app.set('views', './html')
app.set('view engine','pug')

app.use(express.static('css'))
app.use(express.static('compile'))
app.use(express.static('sprites'))

app.get('/', (req, res) => {
  res.render('index')
});

app.listen(3000, () => console.log('Server running'))
