// const { DataSource } = require("typeorm");
// require("dotenv").config();

// const AppDataSource = new DataSource({
//     type: "postgres",
//     url: process.env.DATABASE_URL,
//     synchronize: true,
//     logging: true,
//     entities: ["src/entity/**/*.js"],
//     migrations: ["src/migration/**/*.js"],
// })

// module.exports = AppDataSource;

const { DataSource } = require("typeorm");
require("dotenv").config();
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
module.exports = AppDataSource;
