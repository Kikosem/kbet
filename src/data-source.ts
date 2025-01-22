import { DataSource } from "typeorm";
import dotenv from "dotenv";

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
    entities: ["src/entity/**/*.js"],
    migrations: ["src/migration/**/*.js"],
  });
  
  export default AppDataSource;
