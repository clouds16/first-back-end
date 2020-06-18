const express = require('express'),
    app = express(),
    User = require('./models/users'),
    bodyParser = require("body-parser"),
    methodOveride = require("method-override");

//Include 
Blog = require("./models/blog");

require('./db/mongoose');

//Next two lines can be removed when react files are used
app.set('view engine', 'ejs');

//Use the body-parser NPM -- should be replaced with .json() someday
app.use(bodyParser.urlencoded({ extended: true }));

//Use method override for put and delete requests
app.use(methodOveride("_method"));

app.use(express.json());
let port = process.env.PORT || 3000;

//BLOG ROUTES
let userBlogs = require('./routers/blogs');
app.use(userBlogs);

//USER Routes
let userRouter = require('./routers/users');
app.use(userRouter);

// //THREAD Routes
// let userThreads = require('./routers/threads');
// app.use(userThreads);



app.listen(port, () => {
    console.log(' Server on port: ' + port)
});