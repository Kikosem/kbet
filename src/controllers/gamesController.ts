import { Request, Response } from "express";
import axios from "axios";

// Fetch Live games
export const fetchLiveGames = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axios.get('https://lichess.org/api/tv/channels');
        res.status(200).json(response.data)
    } catch (error) {
        console.error('Error fetching live games', error);
        res.status(500).json({ message: 'Failed to fetch games' })
    }
};
