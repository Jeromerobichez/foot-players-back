const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const {
  getAllPlayers
} = require('./actions')

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Hello we are listening on port ${port}`)
})

app.use(cors('*')) // allow access to the server from any domain
app.use(express.json()) // to make the server receive the incoming requests as JSON object

app.get('/', async(req, res) => {
  let allPlayers = await getAllPlayers()
  res.set('Access-Control-Allow-Origin', '*')
  res.send(allPlayers) 
  })
