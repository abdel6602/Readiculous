const express = require("express");
const Authenticator = require("../Controllers/AuthController");

const auth = new Authenticator();

const authApp = express();

authApp.post('/login', auth.login);
authApp.post('/', auth.signup);
authApp.delete('/', auth.deleteUser);

module.exports = authApp;