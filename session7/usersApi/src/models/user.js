const mongoose = require('mongoose')
const validator = require('validator')
const User = mongoose.model('User', {
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
    }
})
module.exports = User