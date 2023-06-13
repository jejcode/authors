const express = require('express') // import express module
const cors = require('cors')
const app = express()  // make an instance of express

app.use(cors()) 
app.use(express.json())  // allows JSON objects to be posted
app.use(express.urlencoded({ extended: true }))

require('./config/mongoose.config')
require('./routes/author.routes')(app)

app.listen(8000, () => console.log('Listening on port 8000'))
