const express = require('express'),
    app = express(),
    User = require('./models/users');
    Blog = require("./models/blog");

require('./db/mongoose');

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


app.listen( port, () => {
    console.log(' Server on port: ' + port)
});