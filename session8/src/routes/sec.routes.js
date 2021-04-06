const express = require('express')
const secModel = require('../models/sec.model')
const router = new express.Router()
const auth = require('../middleware/auth')
router.post('/add',auth, async(req, res)=>{
    try{
        const Data = new secModel({
            ...req.body,
            owner:req.user._id
        })
        await Data.save()
        res.status(200).send({
            apiStatus: true,
            data:Data,
            message:'data inserted successfuly'
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus: false,
            data:e.message,
            message:'data inserting error'
        })
    }
})

module.exports=router