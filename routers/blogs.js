const express = require('express')
const router = new express.Router()
//const Blog = require('./models/blog');
const { readFile } = require('fs').promises;

//INDEX - show all blogs
router.get('/blogs', async (req, res) => {
    res.send(await readFile('./pages/blogs/index.html', 'utf8'));

});

module.exports = router;