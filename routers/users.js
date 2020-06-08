const express = require('express')
const router = new express.Router()
const User = require('../models/users');



// Add new user 

router.post('/users', async (req, res) => {
     const user = new User(req.body)


     try {
         await user.save();
         res.status(201).send(user)
     } catch(e) {
         res.status(400).send(e)
     }
})

//find user 

router.get('/users', async (req, body)=>{
    try {
        const users = await User.find({});
        res.send(users)
    } catch(e) {
        res.statusMessage(500).send(e)
    }
} )

router.get("/users/yo", function(req, res)  {
    //render some page
    res.send("Yo! This is the yo page!");
});



module.exports = router; 

//find user by id 



//update users



//delete user   