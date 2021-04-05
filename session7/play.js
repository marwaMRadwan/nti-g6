const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/myNewDb',{
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology:true,
    useNewUrlParser:true
})

// const MyTable1 = mongoose.model('MyTable1', {
//     title:{
//         type:String
//     },
//     description:{
//         type: String
//     },
//     numOfPages:{
//         type:Number
//     }
// })
// const myData = new MyTable1({
//     title:'a',
//     description:'b',
//     numOfPages:'gyfy'
// })

// myData.save()
// .then(()=>{console.log('added')})
// .catch((e)=>{console.log(e)})

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
        // lowerCase:true,
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
    }
})

const myUser = new User({
    name:'mai ahmed',
    age:22,
    email:'mai@email.com',
    password:'12@Hello'
})

myUser.save().then(()=>{console.log('added')}).catch(e=>console.log(e))











