const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')

users = require('./routes/api/users')
profile = require('./routes/api/profile')
posts = require('./routes/api/posts')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const db = require('./config/keys').mongoURI;

mongoose
.connect(db, { useNewUrlParser: true})
.then( () => console.log('MongoDb connected'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('hi')
})

app.use(passport.initialize())
require('./config/passport')(passport)

app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))