const express = require('express');
const Blog = require('../models/blog');
const router = new express.Router()
//const Blog = require('./models/blog');
const { readFile } = require('fs').promises;

//ROOT - / - Redirect to /blogs
router.get('/', async (req, res) => {
    //res.send(await readFile('./pages/blogs/index.html', 'utf-8'));
    res.redirect("blogs");
});

//INDEX - /blogs - Show all blogs
router.get('/blogs', async (req, res) => {
    //res.send(await readFile('./pages/blogs/index.html', 'utf8'));
    Blog.find({}, function (err, blogs) {
        if (err) {
            console.log(err);
        }
        else {
            res.render('./blogs/index', { blogs: blogs });
        }
    });

});

//NEW - /blogs/new - Display a list of all blogs
router.get("/blogs/new", async (req, res) => {
    //res.send(await readFile('/pages/blogs/new.html', 'utf-8'));
    res.render('./blogs/new');
});


//CREATE - /blogs - Add a new blog to the DB
router.post("/blogs", async (req, res) => {
    //res.send(await readFile('./pages/blogs.html', 'utf-8'));
    let title = req.body.title,
        image = req.body.image;
    body = req.body.body;

    let newBlog = { title: title, image: image, body: body };

    Blog.create(newBlog, function (err, newlyCreated) {
        if (err) {
            console.log(err);
            res.render("/new");
        } else {
            console.log(newlyCreated);
            res.redirect("/blogs");
        }
    });
});

//=============================================================
//              Work in progresss
//=============================================================

// //SHOW - /blogs/:id - Shows info about a single blog
router.get('/blogs/:id', async (req, res) => {
    //res.send(await readFile('/pages/blogs/edit', 'utf-8'));
    Blog.findById(req.params.id, function (err, foundBlog) {
        if (err) {
            res.redirect("/blogs");
        }
        else {
            res.render("./blogs/show", { blog: foundBlog });
        }
    });
});
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