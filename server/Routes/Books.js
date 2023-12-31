const express = require('express');
const BookController = require('../Controllers/BookController');


const controller = new BookController();
const booksApp = express();

booksApp.get('/', controller.getAllBooks);
booksApp.post('/insert', controller.insertBook);

module.exports = booksApp;