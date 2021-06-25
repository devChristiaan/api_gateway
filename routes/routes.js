//Imports
const express = require("express")
const router = express.Router()
const axios = require("axios")

//Grab the api name and forward the request
router.all('/:apiName', (req, res) =>{
  axios.get(`http://localhost:9001/${req.params.apiName}`)
  .then( response => {res.send(response.data)})
})

//Exports
module.exports = router