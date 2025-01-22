// const express = require('express');
// const { placeBet } = require('../controllers/betsController');
// const router = express.Router();

// // POST: Place new bet
// router.post('/', placeBet);

// module.exports = router


import express, { Request, Response } from 'express';
import { placeBet } from '../controllers/betsController';

const router = express.Router();

// POST: Place new bet
router.post('/', async (req: Request, res: Response) => {
    try {
        await placeBet(req, res);
    } catch (error) {
        res.status(500).json({ error: 'Failed to place bet' });
    }
})

export default router;