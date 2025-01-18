const express = require('express');
const { getUserProfile, updateUserBalance } = require('../controllers/usersController');
const router = express.Router();

// GET: Fetch live games
router.get('/:id', getUserProfile);

module.exports = router;