"use strict";

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

var _require = require("typeorm"),
  DataSource = _require.DataSource;
require("dotenv").config();
var AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  // Docker exposes PostgreSQL to localhost
  port: 5401,
  // Port mapped to the host
  username: "postgres",
  password: "password",
  // Matches POSTGRES_PASSWORD
  database: "kbet",
  synchronize: true,
  logging: true,
  entities: ["src/entity/**/*.js"],
  migrations: ["src/migration/**/*.js"]
});
module.exports = AppDataSource;