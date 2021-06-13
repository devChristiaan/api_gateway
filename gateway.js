const express = require('express')
require('dotenv').config()
const routes = require('./routes/routes')

const port = process.env.PORT || 5001

const app = express()

app.use(express.json())

app.use('/', routes)

app.listen(port, () =>{
  console.log(`Gateway successfully running on http://www.localhost:${port}`);
})