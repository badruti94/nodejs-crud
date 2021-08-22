const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')

const notes = require('./routes/notes')

const app = express();

app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
        console.log('Connect Successfully');
    })

app.use('/', notes)

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('Listening on http://localhost:3001');
})