const express = require('express');

const userApp = express();
const UserController = require('../Controllers/UserController');

const userController = new UserController();

userApp.get('/:id', userController.getUserInfo);

module.exports = userApp