// const dotenv = require('dotenv');
// const AppDataSource = require('./src/data-source')
// const cors = require('cors')
// const express = require('express');
// const axios = require('axios');
// const gamesRoutes = require('./src/routes/games');
// const betsRoutes = require('./src/routes/bets');
// const usersRoutes = require('./src/routes/users');
// const liveGamesRoute = require('./src/routes/liveGames')

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());


// app.get("/", (req, res) => {
//     res.send("home page")
    
// })

// app.get("/health", (req, res) => {
//     res.send("health check")
// })

// app.use('/api/games', gamesRoutes);
// app.use('/api/bets', betsRoutes);
// app.use('/api/users', usersRoutes);

// app.use('/api', liveGamesRoute);


// AppDataSource.initialize()
//     .then(() => {
//         console.log("Data Source has been initialized!");
//     })
//     .catch((error) => {
//         console.error("Error connecting to database:", error)
//     })


// const port = process.env.PORT || 6000;
// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
//   });
  

const dotenv = require('dotenv');
const AppDataSource = require('./src/data-source');
const cors = require('cors');
const express = require('express');
const axios = require('axios');
const gamesRoutes = require('./src/routes/games');
const betsRoutes = require('./src/routes/bets');
const usersRoutes = require('./src/routes/users');
const liveGamesRoute = require('./src/routes/liveGames');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/health", (req, res) => {
  res.send("health check");
});

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
