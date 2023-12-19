const ClubController = require("../Controllers/ClubController");
const express = require("express");

const clubApp = express();
const clubController = new ClubController();

clubApp.post('/create', clubController.createClub);
clubApp.post('/addAdmin', clubController.addAdmin);
clubApp.post('/addMember', clubController.addMember);

module.exports = clubApp;