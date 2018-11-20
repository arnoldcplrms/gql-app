const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Author', new Schema({
    name: String,
    age: Number
}))