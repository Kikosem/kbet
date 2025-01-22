import { Request, Response } from "express";

export const placeBet = async(req: Request, res: Response) => {
    try {
        const { userId, gameId, betAmount, outcome } = req.body;

        // Validate Inputs
        if (!userId || !gameId || betAmount || outcome) {
            return res.status(400).json({ message: 'Missing required fields' });

        }


        // placeholder: save bet to database (replace with typeorm logic)
        console.log('Bet placed:', { userId, gameId, betAmount, outcome });
        res.status(201).json({ message: 'Bet placed successfully'})
    } catch (error) {
        console.error('Error placing bet:', error);
        res.status(500).json({ message: 'failed to place bet' })
    }
};

