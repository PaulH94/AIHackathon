const express = require('express')
const app = express()

app.use('/static',express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.listen(8080, function () {
  console.log('Example app listening on port 3000!')
})