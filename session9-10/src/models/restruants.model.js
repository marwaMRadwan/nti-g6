const mongoose = require('mongoose')
const  validator = require('validator')
const restSchema = new mongoose.Schema({
    restName:{type:String, unique:true, required:true},
    branches:[{
        branch:{
            bName:{type:String, unique:true, trim:true},
            bTables:[{
                table:{
                    tNum:{type:Number, required:true},
                    tNumOfSeats:{type:Number, required:true}
                }
            }],
            rate:{
                type:Number,
                default:5
            },
            manager:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:'User'
            }
        }
    }],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
},
{timestamps:true}
)
const Resturant =mongoose.model('Resturant', restSchema)

module.exports = Resturant