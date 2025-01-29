import { Request, Response, NextFunction } from "express";
import { User } from "../entity/User";
import jwt from "jsonwebtoken";
import AppDataSource from "../data-source";

// Extend Request type to include `user`
interface AuthenticatedRequest extends Request {
    user?: User;
}

// Middleware to protect routes
const authenticateUser = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const authHeader: string | undefined = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];

        if (!token) {
            res.status(401).json({ message: "Access Denied: No token provided" });
            return; // Ensure middleware exits here
        }

        // Verify the token
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error("JWT_SECRET not defined in env");
        }

        // Specify the expected shape of the token payload
        const decoded = jwt.verify(token, secret) as { id: string };

        // Fetch user data using id from the decoded token
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOne({ where: { id: decoded.id } });

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return; // Ensure middleware exits here
        }

        // Attach the user object to the request for downstream use
        req.user = user;

        next(); // Pass control to the next middleware
    } catch (error) {
        console.error("Error authenticating user", error);
        res.status(403).json({ message: "Invalid or expired token" });
        return; // Ensure middleware exits here
    }
};

export default authenticateUser;
