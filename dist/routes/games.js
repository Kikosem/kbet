"use strict";

var express = require('express');
var _require = require('../controllers/gamesController'),
  fetchLiveGames = _require.fetchLiveGames;
var router = express.Router();

// GET: Fetch live fetchLiveGames
router.get('/', fetchLiveGames);
module.exports = router;