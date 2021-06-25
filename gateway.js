///Imports
const express = require('express')
require('dotenv').config()
const routes = require('./routes/routes')
const helmet = require('helmet')

//Declerations
const port = process.env.PORT || 5001
const app = express()

//Middleware
app.use(express.json())
app.use(helmet())
app.use('/', routes)

//Server
app.listen(port, () =>{
  console.log(`Gateway successfully running on http://www.localhost:${port}`);
})