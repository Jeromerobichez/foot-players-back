const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Hello we are listening on port ${port}`)
})

app.use(cors('*')) 
app.use(express.json())
