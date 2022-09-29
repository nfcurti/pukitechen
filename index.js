const express = require('express')
const app = express()
const port = 3000
app.use(express.static(__dirname + '/assets'));

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/views/index.html');
})

app.get('/dashboard', (req, res) => {
   res.sendFile(__dirname + '/views/dashboard.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;