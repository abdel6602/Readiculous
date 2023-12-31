const express = require('express');
const GeneralController = require('../Controllers/GeneralController');
const generalApp = new express();

const controller = new GeneralController();

generalApp.get('/', controller.search);

module.exports = generalApp