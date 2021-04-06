const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        minlength:5,
        maxlength:20
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error('invalid email')
        }
    },
    password:{
        type:String,
        trim:true,
        // lowercase:true,
        required:true,
        match:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        validate(value){
            if(value.includes('123')) throw new Error('invalid pass')
        }
    },
    age:{
        type: Number,
        validate(value){
            if(value<21) throw new Error('minimum 21 years')
        }
    },
    status:{
        type:Boolean,
        default:false
    }, 
    tokens:[{
        token:{ type:String,  trim:true }
    }]
})

userSchema.virtual('userSec',{
    ref:'Sec',
    localField:'_id',
    foreignField:'owner'
})
userSchema.methods.toJSON = function(){
    const user = this.toObject()
    delete user.password
    return user
}

userSchema.pre('save', async function(next){
    console.log('pre save')
    const user = this
    if(user.isModified('password'))
        user.password = await bcrypt.hash(user.password,10)
    // console.log(this)
    next()
})

userSchema.statics.findUser= async(email, password)=>{
    const user = await User.findOne({email})
    if(!user) throw new Error('invalid email')
    const isTruePass = await bcrypt.compare(password, user.password)
    if(!isTruePass) throw new Error('invalid pass')
    if(user.tokens.length>4) throw new Error('ft7t kter')
    return user
}
userSchema.methods.generateToken = async function(){
    const user = this
    const token = jwt.sign({_id: user._id.toString()}, 'secret')
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}
const User = mongoose.model('User', userSchema)
module.exports = User
