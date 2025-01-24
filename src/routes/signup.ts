import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import AppDataSource from "../data-source";
import { User } from "../entity/User";

const router = express.Router();

router.post("/signup", async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, email, password } = req.body;

        // Validate input
        if (!username || !email || !password) {
            res.status(400).json({ message: "Username, email, and password required" });
            return;
        }

        const userRepository = AppDataSource.getRepository(User);

        // Check if the user already exists
        const existingUser = await userRepository.findOneBy({ email });
        if (existingUser) {
            res.status(400).json({ message: "Email is already registered" });
            return;
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new user
        const newUser = userRepository.create({
            username,
            email,
            password: hashedPassword,
            balance: 0, // Default balance
        });

        await userRepository.save(newUser);

        res.status(201).json({ message: "User created successfully", userId: newUser.id });

        console.log(newUser.id)
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Failed to create user. Please try again" });
    }
});

export default router;
