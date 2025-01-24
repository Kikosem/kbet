// import { Request, Response } from "express";
// import bcrypt from "bcryptjs";
// import AppDataSource from "../data-source";
// import { User } from "../entity/User"

// export const createUser = async (req: Request, res: Response) => {
//     try {
//         const { username, email, password } = req.body;

//         // Validate input
//         if (!username || !email || !password) {
//             return res.status(400).json({ message: "Username, email and password are required" })
//         }

//         const userRepository = AppDataSource.getRepository(User);

//         // Check if the user already exists
//         const existingUser = await userRepository.findOneBy({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: "Email is already registered" })
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         //Create the new user
//         const newUser = userRepository.create({
//             username,
//             email,
//             password: hashedPassword,
//             balance: 0 // Default balance
//         });

//         await userRepository.save(newUser);

//         res.status(201).json({ message: "User created successfully", userId: newUser.id})
    

//     } catch (error) {
//         console.error("Error creating user:", error);
//         res.status(500).json({ message: "Failed to create user. Please try again" })
//     }
// }