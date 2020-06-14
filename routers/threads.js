const express = require('express');
const threads = new express.Router();

//render the threads html page
threads.get('/threads', (req, res) => {
    // res.send( await readFile('./pages/threads.html', 'utf8'));
    res.render('./pages/threads.html');
});


module.exports = threads;