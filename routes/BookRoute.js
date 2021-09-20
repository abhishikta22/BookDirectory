const express = require('express');
const Book = require('../models/Book');
const bookRoute = express.Router();
const ObjectId = require("mongodb");

bookRoute.post('/', async (req, res) => {
    try {
        const book = new Book(req.body);
        const addBook = await book.save();
        res.status(201).send(addBook);
    }
    catch (err) {
        console.log(err);
    }
});

bookRoute.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book != null) {
            res.send(book);
        }
        else {
            res.send("Book Not found");
        }

    }
    catch (err) {
        console.log(err);
    }

});
bookRoute.patch('/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (book != null) {
            res.send(book);
        }
        else {
            res.send("Book Not found");
        }

    }
    catch (err) {
        console.log(err);
    }
});
bookRoute.delete('/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id, { new: true });
        if (book != null) {
            res.send(book);
        }
        else {
            res.send("Book Not found");
        }
    }
    catch (err) {
        console.log(err);
    }
});
module.exports = bookRoute;