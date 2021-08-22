const mongoose = require('mongoose')
const {Schema} = mongoose

const notes = new Schema({
    title: String,
    note: String
})

module.exports = mongoose.model('Notes', notes)