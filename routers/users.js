const express = require('express')
const router = new express.Router()
const User = require('../models/users');
const {readFile} = require('fs').promises;



// router to open vanilla html home

router.get('/home', async (req, res)=>{
    res.send( await readFile('./pages/home.html', 'utf8'));

});


// get users page html using vanilla

router.get('/users', async (req, res)=> {
    res.send( await readFile('./pages/create_user.html', 'utf8'));
})

// get all users
router.get('/users', async (req, body)=>{
    try {
        const users = await User.find({});
        res.send(users)
    } catch(e) {
        res.statusMessage(500).send(e)
    }
} )


// Router to create new user 
router.post('/users', async (req, res) => {
     const user = new User(req.body);
     
     try {
         await user.save();
         res.status(201).send(user)
     } catch(e) {
         res.status(400).send(e)
     }

     console.log(user)
})







module.exports = router; 

//find user by id 



//update users



//delete user   