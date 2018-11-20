const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Book', new Schema({
    name: String,
    genre: String,
    authorId: String
}))