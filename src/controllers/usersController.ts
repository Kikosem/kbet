import { Request, Response } from "express";

export const getUserProfile = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.params.id;

        // Simulate fetching user from db (replace with typeorm)
        const user = { id: userId, username: 'dracofan', balance: 100};

        res.status(200).json(user);

    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({message: 'failed to fetch user profile'});
    }
};

// Update user balance
export const updateUserBalance = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const { newBalance } = req.body;

        if (newBalance == null) {
            return res.status(400).json({ message: 'New balance is required'});
        }

        // Simulate updating balance (replace with typeorm)
        console.log(`User ${userId}'s balance updated to: ${newBalance}`);
        
        res.status(200).json({ message: 'Balance updated successfully' })
    } catch (error) {
        console.error('Error updating balance:', error);
        res.status(500).json({ message: 'Failed to update balance' });
    }
}

