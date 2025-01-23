// import { Request, Response } from "express";

// export const placeBet = async(req: Request, res: Response) => {
//     try {
//         const { userId, gameId, betAmount, outcome } = req.body;

//         // Validate Inputs
//         if (!userId || !gameId || betAmount || outcome) {
//             return res.status(400).json({ message: 'Missing required fields' });

//         }


//         // placeholder: save bet to database (replace with typeorm logic)
//         console.log('Bet placed:', { userId, gameId, betAmount, outcome });
//         res.status(201).json({ message: 'Bet placed successfully'})
//     } catch (error) {
//         console.error('Error placing bet:', error);
//         res.status(500).json({ message: 'failed to place bet' })
//     }
// };

import { Request, Response } from "express";
import AppDataSource from "../data-source";
import { Bet } from "../entity/Bet";
import { User } from "../entity/User";
import { Game } from "../entity/Game";

export const placeBet = async (req: Request, res: Response) => {
    try {
        const { userId, gameId, betAmount, outcome } = req.body;

        // Validate Inputs
        if (!userId || !gameId || !betAmount || !outcome) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const userRepository = AppDataSource.getRepository(User);
        const gameRepository = AppDataSource.getRepository(Game);
        const betRepository = AppDataSource.getRepository(Bet);

        // Find User
        const user = await userRepository.findOneBy({ id: userId });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Find Game
        const game = await gameRepository.findOneBy({ id: gameId });
        if (!game) {
            return res.status(404).json({ message: "Game not found" });
        }

        // Check if user has sufficient balance
        if (user.balance < betAmount) {
            return res.status(400).json({ message: "Insufficient balance" });
        }

        // Deduct bet amount from user balance
        user.balance -= betAmount;
        await userRepository.save(user);

        // Create and Save Bet
        const newBet = betRepository.create({
            user,
            game,
            amount: betAmount,
            odds: 1.5, // Example: Replace with real odds calculation logic
            outcome: outcome, // 'win', 'lose', or 'draw'
            settled: false, // Bet is not yet settled
        });

        await betRepository.save(newBet);

        // Respond to client
        res.status(201).json({
            message: "Bet placed successfully",
            bet: newBet,
        });
    } catch (error) {
        console.error("Error placing bet:", error);
        res.status(500).json({ message: "Failed to place bet" });
    }
};
