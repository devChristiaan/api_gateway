///Imports
const express = require('express')

//Declerations
const port = 5001
const app = express()

//Middleware
app.use('/')

//Server
app.listen(port, () =>{
  console.log(`Fake API successfully running on http://www.localhost:${port}`);
})