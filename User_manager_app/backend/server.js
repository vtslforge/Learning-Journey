const express = require('express')
var cors = require('cors')
const app = express()
const port = 3001
const companyDB = require('./companyDB')
app.use(cors())

app.get('/api/data', (req, res) => {
  res.json(companyDB)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
