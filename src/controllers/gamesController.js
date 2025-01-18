const axios = require('axios');

// Fetch Live games
const fetchLiveGames = async (req, res) => {
    try {
        const response = await axios.get('https://lichess.org/api/tv/channels');
        res.status(200).json(response.data)
    } catch (error) {
        console.error('Error fetching live games', error);
        res.status(500).json({ message: 'Failed to fetch games' })
    }
};

module.exports = { fetchLiveGames };