const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const ads = [
  {title: 'Hello, world (again)!'}
];

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(ads)
})

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.put('/user', function (req, res) {
  res.send('Got a PUT request at ${user}')
})

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})