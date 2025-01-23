import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { User } from "./entity/User";
import { Bet } from "./entity/Bet";
import { Game } from "./entity/Game"


dotenv.config();


const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost", // Docker exposes PostgreSQL to localhost
    port: 5401, // Port mapped to the host
    username: "postgres",
    password: "password", // Matches POSTGRES_PASSWORD
    database: "kbet",
    synchronize: true,
    logging: true,
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
  });
  
  export default AppDataSource;
