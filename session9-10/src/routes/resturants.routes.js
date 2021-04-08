const express= require('express')
const Resturant = require('../models/restruants.model')
const User = require('../models/user.model')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/resturant/add', auth, async(req,res)=>{
    try{
        ownerEmail = req.body.owner
        owner = await User.findOne({email:ownerEmail})
        // res.send({owner, ownerEmail})
        if(!owner) throw new Error('invalid owner email')
        const myData = new Resturant({
            owner:owner._id,
            restName:req.body.restName
        })
        await myData.save()
        res.status(200).send({myData})
    }
    catch(e){
        res.status(500).send({error:e.message})
    }
})

module.exports = router