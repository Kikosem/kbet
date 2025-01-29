import express, { Request, Response } from 'express';
import { getUserProfile, updateUserBalance } from '../controllers/usersController';

const router = express.Router();

// GET: Fetch user profile
router.get('/:id', getUserProfile);

export default router;