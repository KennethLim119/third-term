const app = express();
const express = require('express')
const bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function() {
  console.log('listening on 3000')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
  console.log(req.body)
})
