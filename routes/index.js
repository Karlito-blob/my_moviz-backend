var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const apiKey = process.env.OWM_API_KEY

const accessToken = process.env.OWN_TOKEN


const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: `Bearer ${accessToken}`
    }
};


router.get('/movies', (req, res) => {
    fetch(url, options)
    .then(response => response.json())
    .then(data => {
    res.json({ movies: data.results });
    });
});

module.exports = router;
