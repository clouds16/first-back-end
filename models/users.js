let mongoose = require('mongoose');
let validator = require('validator');


//create user schema to pass in as argument . 
const userSchema = new mongoose.Schema({
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
        //use validator to send error if incorrect format
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
});




//user log in with encryption. user password verfication using bcrypt compare 
userSchema.statics.findByCredentials = async (email, password) =>{
    const user = await User.findOne({ email })


    if (!user){
        throw new Error('unable to log in ')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    console.log("is a match")
    
    if(!isMatch)  {
        throw new Error('Unable to login')
       
    }

    return user
}



//hash the plain text password before saving. Function operates before sending to mongoose model. User creation
userSchema.pre('save', async function(next) {
    const user = this ;
    

    if (user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})



//mongoose model to create user required parameters

let User = mongoose.model('User', userSchema)


module.exports = User ; 