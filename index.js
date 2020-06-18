const express = require('express'),
    app = express(),
    User = require('./models/users'),
    bodyParser = require("body-parser");
    
Blog = require("./models/blog");

require('./db/mongoose');

//Next two lines can be removed when react files are used
app.set('view engine', 'ejs');

//Use the body-parser NPM -- should be replaced with .json() someday
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
let port = process.env.PORT || 3000;

//requiring routes

let userBlogs = require('./routers/blogs');
app.use(userBlogs);
//USER Routes
let userRouter = require('./routers/users');
app.use(userRouter);

// //THREAD Routes
// let userThreads = require('./routers/threads');
// app.use(userThreads);

// //BLOG ROUTES

app.listen(port, () => {
    console.log(' Server on port: ' + port)
});