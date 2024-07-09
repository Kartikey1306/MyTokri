
require('dotenv').config();
const fs = require('fs');
const express = require('express');
const app = express();

// Read and parse the JSON file
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

const encryptionKey = config.encryptionKey;
const accessToken = config.accessToken;
const campaignId = config.campaignId;

console.log('Encryption Key:', encryptionKey);
console.log('Access Token:', accessToken);
console.log('Campaign ID:', campaignId);

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Your server logic here

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

