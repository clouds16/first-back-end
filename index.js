const  express = require('express');
const User = require('./models/users');
require('./db/mongoose')



const  app = express();
let port = process.env.PORT || 3000;

app.use(express.json());
 
let userRouter = require('./routers/users');
app.use(userRouter);

app.listen(port, ()=>{
    console.log(' Server on port: ' + port )
})