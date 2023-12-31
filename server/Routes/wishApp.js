const express = require('express');
const WishController = require('../Controllers/WishController');
const wishApp = express();

const controller = new WishController()

wishApp.get('/:id', controller.getUserWish);
wishApp.post('/add', controller.addToWishList);
wishApp.delete('/delete/:user_id/:book_id', controller.deleteWish);


module.exports = wishApp;