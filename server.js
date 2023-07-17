const express = require('express')
const app = express()
const port = 8080
i = 0

app.get('/', (req, res) => {
  res.send((i++)+'Node is working!! ')
})
app.get('/liveness ', (req,res) => {
  res.send('Your Container is UP and Running')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
