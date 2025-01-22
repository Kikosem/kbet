"use strict";

var express = require('express');
var _require = require('../controllers/usersController'),
  getUserProfile = _require.getUserProfile,
  updateUserBalance = _require.updateUserBalance;
var router = express.Router();

// GET: Fetch live games
router.get('/:id', getUserProfile);
module.exports = router;