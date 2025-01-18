const express = require('express');
const { placeBet } = require('../controllers/betsController');
const router = express.Router();

// POST: Place new bet
router.post('/', placeBet);

module.exports = router