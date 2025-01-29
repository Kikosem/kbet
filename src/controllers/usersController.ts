import { Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entity/User";

// export const getUserProfile = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const userId = req.params.id;
//         console.log(req.params.id);

//         if (!userId) {
//             res.status(400).json({ message: "Invalid user ID" });
//             return;
//         }

//         // Find the user
//         const userRepository = AppDataSource.getRepository(User);
//         const user = await userRepository.findOneBy({ id: userId });

//         if (!user) {
//             res.status(404).json({ message: "User not found" });
//             return;
//         }

//         res.status(200).json(user);
//     } catch (error) {
//         console.error("Error fetching profile:", error);
//         res.status(500).json({ message: "Failed to fetch user profile" });
//     }
// };

// // Update user balance
// export const updateUserBalance = async (req: Request, res: Response) => {
//     try {
//         const userId = req.params.id;
//         const { newBalance } = req.body;

//         if (newBalance == null) {
//             res.status(400).json({ message: "New balance is required" });
//             return;
//         }

//         // Find the user
//         const userRepository = AppDataSource.getRepository(User);
//         const user = await userRepository.findOneBy({ id: userId });

//         if (!user) {
//             res.status(404).json({ message: "User not found" });
//             return;
//         }

//         // Update the user's balance
//         user.balance = newBalance;
//         await userRepository.save(user);

//         res.status(200).json({ message: "Balance updated successfully", user });
//     } catch (error) {
//         console.error("Error updating balance:", error);
//         res.status(500).json({ message: "Failed to update balance" });
//     }
// };


export const getUserProfile = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.params.id; // Keep userId as a string

        if (!userId) {
            res.status(400).json({ message: "Invalid user ID" });
            return;
        }

        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOneBy({ id: userId }); // No need for parseInt()

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching profile:", error);
        res.status(500).json({ message: "Failed to fetch user profile" });
    }
};


export const updateUserBalance = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const { newBalance } = req.body;

        if (!newBalance) {
            res.status(400).json({ message: "New balance is required" });
            return;
        }

        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOneBy({ id: userId }); // Keep UUID as a string

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        user.balance = newBalance;
        await userRepository.save(user);

        res.status(200).json({ message: "Balance updated successfully", user });
    } catch (error) {
        console.error("Error updating balance:", error);
        res.status(500).json({ message: "Failed to update balance" });
    }
};
