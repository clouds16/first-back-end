const express = require('express')
const router = new express.Router()
//const Blog = require('./models/blog');
const { readFile } = require('fs').promises;

//ROOT - / - Redirect to /blogs
router.get('/', async (req, res) =>   {
    res.send(await readFile('./pages/blogs/index.html', 'utf-8'));
});

//INDEX - /blogs - Show all blogs
router.get('/blogs', async (req, res) => {
    res.send(await readFile('./pages/blogs/index.html', 'utf8'));
});

//NEW - /blogs/new - Display a list of all blogs
router.get("/blogs/new", async (req, res) => {
    res.send(await readFile('./pages/blogs/new.html', 'utf-8'));
});

//=============================================================
//              Work in progresss
//========================================================

// //CREATE - /blogs - Add a new blog to the DB
// router.post("/blogs", async (req, res) => {
//     res.send(await readFile('./pages/blogs.html', 'utf-8'));
// });
// //SHOW - /blogs/:id - Shows info about a single blog
// router.get('/blogs/:id/edit', async (req, res) => {
//     res.send(await readFile('/pages/blogs/edit', 'utf-8'));
// });
// //EDIT - /blogs/:id/edit - Show edit form for one dog
// router.get('/blogs/:id', async (req, res) => {
//     res.send(await readFile('/pages/blogs/show', 'utf-8'));
// });
// //UPDATE - /blogs/:id - Updates a particular blog, then redirect
// router.put('/blogs/:id', async (req, res) => {
//     res.send(await readFile('/pages/blogs', 'utf-8'));
// });
// //DESTROY - /blogs/:id - Delete a particular blog, then redirect
// router.delete('/blogs/:id', async (req, res) => {
//     res.send(await readFile('/pages/blogs', 'utf-8'));
// });



module.exports = router;