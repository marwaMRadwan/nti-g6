// name, bithday, email, phone, area, password, image, discount level, username, status, role
const mongoose = require('mongoose')
const jwt=require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const  validator = require('validator')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    bDay:{
        type:Date
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
    phone:{
        type:String,
        validate(value){
            if(!validator.isMobilePhone(value, ['ar-EG'])) throw new Error('egyption mobile needed')
        }
    },
    area:{
        type: String,
        trim:true,
        enum:['giza', 'cairo', 'alex']
    },
    password:{
        type:String,
        trim:true,
        required:true
   //     ,match://
    },
    image:{
        type:String,
        trim:true
    },
    dLevel:{
        type:Number
    },
    userName:{
        type:String,
        unique:true
    },
    status:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        required:true
    },
    userId:{
        type:Number,
        unique:true
    },
    tokens:[
        {
            token:{type:String, trim:true}
        }
    ]
})

userSchema.pre('save', async function(next){
    lastId = await User.findOne().sort({_id:-1})

    user = this
    if(!user.userName) user.userName = user._id
    if(user.isModified('password')) user.password = await bcrypt.hash(user.password, 8)
    if(!lastId) user.userId=1
    else user.userId = lastId.userId+1
    next()
})
const User = mongoose.model('User',userSchema)
module.exports = User