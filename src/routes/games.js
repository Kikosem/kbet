const express = require('express');
const { fetchLiveGames } = require('../controllers/gamesController');
const router = express.Router();

 // GET: Fetch live fetchLiveGames
 router.get('/', fetchLiveGames);

 module.exports = router;