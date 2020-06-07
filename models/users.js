let mongoose = require('mongoose');
let validator = require('validator');


let User = mongoose.model('User', {
    name:{
        type: String,
        required: true,
        trim: true
    }, 
    age: {
        type: Number,
        default: 0,
        validate(value){
            if (value<0){
                throw new Error('age must be positve value ')
            }
        }
    }, 
    email :{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    }, 
   password: {
       type: String,
       required: true,
       trim: true, 
       minlength: 7,
       validate(value) {
           if(value.toLowerCase().includes('password')){
               throw new Error('Password cannot contain "password"')
           }
       }
   }
})


module.exports = User ; 