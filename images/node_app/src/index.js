const express = require('express');
const axios = require('axios'); 
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://backend:5000/');
        console.log('Backend Response:', response.data); 
        res.send(`<h1>${response.data.message}</h1><p>API hits: ${response.data.hits}</p>`);
    } catch (error) {
        console.log('Error connecting to backend:', error);
        res.send(`<h1>Error connecting to the backend</h1>`);
    }
});

app.listen(port, () => {
    console.log(`Frontend listening at http://localhost:${port}`);
});