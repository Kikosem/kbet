// const express = require('express');
// const { getUserProfile, updateUserBalance } = require('../controllers/usersController');
// const router = express.Router();

// // GET: Fetch live games
// router.get('/:id', getUserProfile);

// module.exports = router;


import express, { Request, Response } from 'express';
import { getUserProfile, updateUserBalance } from '../controllers/usersController';

const router = express.Router();

// GET: Fetch user profile
router.get('/:id', getUserProfile);

export default router;