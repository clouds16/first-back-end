const mongoose = require('mongoose');

//Create the Blog Schema
let blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body:  String,
    created: {type: Date, default: Date.now}
});

//Create Blog Model
let Blog = mongoose.model("Blog", blogSchema);

//Export model so we can use
module.exports = Blog;
