const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000; // Use PORT from .env or default to 3000

const apiUrl = process.env.API_URL;
const accessToken = process.env.ACCESS_TOKEN;
const campaignId = process.env.CAMPAIGN_ID;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/data', async (req, res) => {
    try {
        const response = await axios.post(apiUrl, {
            campaignId
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from API:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error fetching data from API', details: error.response ? error.response.data : error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
