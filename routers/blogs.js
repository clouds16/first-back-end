const express = require('express');
const Blog = require('../models/blog');
const router = new express.Router()
const { readFile } = require('fs').promises;

//ROOT - / - Redirect to /blogs
router.get('/', async (req, res) => {
    res.redirect("blogs");
});

//INDEX - /blogs - Show all blogs
router.get('/blogs', async (req, res) => {
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
    res.render('./blogs/new');
});


//CREATE - /blogs - Add a new blog to the DB
router.post("/blogs", async (req, res) => {
    let title = req.body.title,
        body = req.body.body;

    let newBlog = { title: title, body: body };

    Blog.create(newBlog, function (err, newlyCreated) {
        if (err) {
            console.log(err);
            res.render("/new");
        } else {
            console.log("Created new Blog!");
            console.log(newlyCreated);
            res.redirect("/blogs");
        }
    });
});

// //SHOW - /blogs/:id - Shows info about a single blog
router.get('/blogs/:id', async (req, res) => {
    Blog.findById(req.params.id, function (err, foundBlog) {
        if (err) {
            res.redirect("/blogs");
        }
        else {
            res.render("./blogs/show", { blog: foundBlog });
        }
    });
});

// //EDIT - /blogs/:id/edit - Show edit form for one dog
router.get('/blogs/:id/edit', async (req, res) => {
    Blog.findById(req.params.id, function (err, foundBlog) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.render("./blogs/edit", { blog: foundBlog });
        }
    });
});

// //UPDATE - /blogs/:id - Updates a particular blog, then redirect
router.put('/blogs/:id', async (req, res) => {
    let title = req.body.title,
        body = req.body.body;

    let updatedBlog = { title: title, body: body };

    Blog.findByIdAndUpdate(req.params.id, updatedBlog, function (err, blog) {
        if (err) {
            res.redirect("/blogs");
        } else {
            console.log("Updated " + req.params.id);
            res.redirect(req.params.id);
        }
    });
});


// //DESTROY - /blogs/:id - Delete a particular blog, then redirect
router.delete('/blogs/:id', async (req, res) => {
    Blog.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.redirect("/blogs");
        } else {
            console.log("Fuck that blog!");
            res.redirect("/blogs");
        }
    });
});



module.exports = router;