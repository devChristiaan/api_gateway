//Imports
const express = require("express")
const router = express.Router()

//Grab the api name and forward the request
router.all('/:apiName', (req, res) =>{
  res.send(console.log('hello world'))
})

//Exports
module.exports = router