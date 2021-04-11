const mongoose = require('mongoose')
const roleSchema = new mongoose.Schema({
    userType:[{type:mongoose.Schema.Types.ObjectId, ref:'UserTypes'}],
    routeLink:{
        type:String
    }
})

const Role = mongoose.model('Role',roleSchema)
module.exports = Role

// userType:[1,2,3,4], routeLink:'/add/user'
//admin manager .... => userTypes => type, status, _id
/*
admin type
as a developer => add route ==> routeLink, [developerType]
*/