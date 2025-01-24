import "reflect-metadata";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";
import axios from "axios";
import AppDataSource from "./data-source"; // Assuming data-source.ts file is now in TypeScript
import gamesRoutes from "./routes/games";
import betsRoutes from "./routes/bets";
import usersRoutes from "./routes/users";
import liveGamesRoute from "./routes/liveGames";
import signup from "./routes/signup"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("home page");
});

app.get("/health", (req: Request, res: Response) => {
  res.send("health check");
});


// Auth
app.use("/api/auth", signup)


app.use('/api/games', gamesRoutes);
app.use('/api/bets', betsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api', liveGamesRoute);


AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });
  

const port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
