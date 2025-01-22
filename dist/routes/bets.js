"use strict";

var express = require('express');
var _require = require('../controllers/betsController'),
  placeBet = _require.placeBet;
var router = express.Router();

// POST: Place new bet
router.post('/', placeBet);
module.exports = router;