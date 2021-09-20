const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
})
const Book = mongoose.model('Book', BookSchema);
module.exports = Book;