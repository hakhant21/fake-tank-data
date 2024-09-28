const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const port = 3000;

// Route to get data from data.json
app.get('/api/data', (req, res) => {
    const dataPath = path.join(__dirname, '../data/tank.json');
    
    // Read the JSON file
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading data' });
        }
        
        // Send the JSON data
        res.json(JSON.parse(data));
    });
});

// Start the server
app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});
