import express, { Request, Response } from 'express';
import axios from 'axios';

const router = express.Router();

// GET: Stream live games from Lichess TV feed
router.get('/livegames', async (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    try {
        const response = await axios.get('https://lichess.org/api/tv/feed', { responseType: 'stream' })
        response.data.on('data', (chunk: Buffer) => {
            const gameData = chunk.toString();
            res.write(`data: ${gameData}\n\n`)
        });

        response.data.on('end', () => {
            res.write('data: Stream ended \n\n');
            res.end();
        });

        req.on('close', () => {
            response.data.destroy();
            res.end();
        });
    } catch (error) {
        res.status(500).send('Error streaming game data')
    }
})

export default router;