import express, { Request, Response } from 'express';
import { fetchLiveGames } from '../controllers/gamesController';

const router = express.Router();

// GET: Fetch live games
router.get('/', async (req: Request, res: Response) => {
    try {
        const games = await fetchLiveGames(req, res);
        res.json(games);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch live games'})
    }
})

export default router;