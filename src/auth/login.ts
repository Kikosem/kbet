import express, { Request, Response } from "express";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";
import AppDataSource from "../data-source";
import { User } from "../entity/User";

const router = express.Router();

// Login route
router.post("/login", async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            res.status(400).json({ message: "Email and password are required" });
            return;
        }

        const userRepository = AppDataSource.getRepository(User);

        // Check if user exists
        const user = await userRepository.findOneBy({ email });
        if (!user) {
            res.status(401).json({ message: "Invalid email or password" })
            return;
        }

        // Compare the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: "Invalid email or password" })
        }

        // Generate a JWT token
        const token = jwt.sign(
            { id: user.id, email: user.email }, // Payload
            process.env.JWT_SECRET as string, // secret
            { expiresIn: "1d" } // Expiry
        )


        res.status(200).json({
            message: "Login successful",
            token,
            user: { id: user.id, username: user.username, email: user.email }
        })

    } catch (error) {
        console.error("Error logging in", error);
        res.status(500).json({ message: "Failed to login. Please try again" })
    }
});

export default router;