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


//Temporaraly create a blog - make sure to commment out after use
//                            oherwise you'll create duplicate blogs

// Blog.create({
//     title: "First Blog for the database!",
//     image: "#",
//     body: "My like is like a black abysss... I feel like tacos",
// });

//Export model so we can use
module.exports = Blog;
