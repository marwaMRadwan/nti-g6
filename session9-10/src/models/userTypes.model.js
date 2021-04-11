const mongoose = require('mongoose')
const userTypesSchema = new mongoose.Schema({
    typeName:{type:String, required:true, unique:true},
    status:{type:Boolean, default: false}
})

userTypesSchema.virtual('myRoles',{
    localField:'_id',
    foreignField:'userType',
    ref: 'roles'
})
const UserTypes = mongoose.model('UserTypes',userTypesSchema)
module.exports = UserTypes