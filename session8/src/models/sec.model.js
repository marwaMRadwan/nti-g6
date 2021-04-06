const mongoose = require('mongoose')
const Sec = mongoose.model('Sec',{
    title:{
        type:String,
        trim:true
    },
    owner:{ //req.user._id
        type:mongoose.Schema.Types.ObjectID,
        required:true,
        ref:'User'
    }
})

module.exports = Sec