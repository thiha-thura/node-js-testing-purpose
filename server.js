const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('NODE-JS is working!! ')
})
app.get('/health', (req,res) => {
  res.send('Your Container is UP and Running')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
