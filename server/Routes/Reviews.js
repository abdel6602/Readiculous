const express = require('express');

const reviewApp = express();
const ReviewController = require('../Controllers/ReviewController');

const controller = new ReviewController();

reviewApp.post('/', controller.create)
reviewApp.get('/getReviews/:user_id', controller.getReviewsByUser);
reviewApp.get('/top', controller.topRated);
reviewApp.get('/book/:id', controller.getBookReviews);


module.exports = reviewApp;