const express = require('express');

const reviewApp = express();
const ReviewController = require('../Controllers/ReviewController');

const controller = new ReviewController();

reviewApp.get('/', controller.create)
reviewApp.get('/getReviews', controller.getReviewsByUser);
reviewApp.get('/top/', controller.topRated);


module.exports = reviewApp;