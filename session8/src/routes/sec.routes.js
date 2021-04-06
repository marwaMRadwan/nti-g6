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

router.get('/allSec', auth, async(req,res)=>{
    //populate
    try{
        await req.user.populate('userSec').execPopulate()
        res.send(req.user.userSec)
    }
    catch(e){res.send({error:e.message})}
})
router.get('/allSec/:id', auth, async(req, res)=>{
    try{
        const _id=req.params.id
        const single = await secModel.findOne({_id, owner:req.user._id})
        res.send(single)
    }
    catch(e){res.send(e)}
})
module.exports=router