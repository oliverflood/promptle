const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Serve style.css from the 'public' folder
app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css');
});

// Route for the start screen
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route for the main page
app.get('/main', (req, res) => {
    res.sendFile(__dirname + '/main.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

