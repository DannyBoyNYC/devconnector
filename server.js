const express = require('express')
const mongoose = require('mongoose')
users = require('./routes/api/users')
profile = require('./routes/api/profile')
users = require('./routes/api/users')
const app = express()

const db = require('./config/keys').mongoURI;

mongoose
.connect(db, { useNewUrlParser: true})
.then( () => console.log('MongoDb connected'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('hi')
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))