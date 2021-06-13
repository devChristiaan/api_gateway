///Imports
const express = require('express')

//Declerations
const port = 9001
const app = express()

//Middleware
app.use(express.json())

//Routes
app.get('/fakeapi', (req, res, next) =>{
  res.send("hello from fake api server")
})

//Server
app.listen(port, () =>{
  console.log(`Fake API successfully running on http://www.localhost:${port}`);
})