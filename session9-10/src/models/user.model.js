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

userSchema.virtual('userResturants', {
    ref:'Resturant',
    localField: "_id",
    foreignField:"owner"
})
userSchema.methods.toJSON = function(){
    const user = this.toObject()
    delete user.password
    return user
}

userSchema.pre('save', async function(next){
    user = this
    if(!user.userId){
        lastId = await User.findOne().sort({_id:-1})
        if(!lastId) user.userId=1
        else  user.userId = lastId.userId+1    
    } 
    if(!user.userName) user.userName = user._id
    if(user.isModified('password')) user.password = await bcrypt.hash(user.password, 8)
    next()
})

userSchema.statics.findByCredintials = async(email, password)=>{
    
    const user = await User.findOne({email})
    if(!user) throw new Error('invalid email')

    if(!user.status) throw new Error('please activate your account')

    const isValidPass = await bcrypt.compare(password, user.password)
    if(!isValidPass) throw new Error('invalid password')
        
    return user
}
userSchema.methods.generateToken = async function (){
    const user=this
    const token = jwt.sign({_id:user._id.toString()}, process.env.JWTSECRET)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}
const User = mongoose.model('User',userSchema)
module.exports = User