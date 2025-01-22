"use strict";

var dotenv = require('dotenv');
var AppDataSource = require('./data-source');
var cors = require('cors');
var express = require('express');
var axios = require('axios');
var gamesRoutes = require('./routes/games');
var betsRoutes = require('./routes/bets');
var usersRoutes = require('./routes/users');
var liveGamesRoute = require('./routes/liveGames');
dotenv.config();
var app = express();
app.use(cors());
app.use(express.json());
app.get("/", function (req, res) {
  res.send("home page");
});
app.get("/health", function (req, res) {
  res.send("health check");
});
app.use('/api/games', gamesRoutes);
app.use('/api/bets', betsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api', liveGamesRoute);
AppDataSource.initialize().then(function () {
  console.log("Data Source has been initialized!");
})["catch"](function (error) {
  console.error("Error connecting to database:", error);
});
var port = process.env.PORT || 6000;
app.listen(port, function () {
  console.log("Server running on http://localhost:".concat(port));
});