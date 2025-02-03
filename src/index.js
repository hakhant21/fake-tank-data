const express = require('express');
const { getTankData} = require('../data/tank');
const app = express();
const port = 3000;

// Route to get data from data.json
app.post('/api/data', (req, res) => {
    
   const data = getTankData();
    // Read the JSON file
   res.json(data);
});

// Start the server
app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});
