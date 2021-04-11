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

router.get('/resturant/showMyResturants', auth, async(req,res)=>{
    try{
        await req.user.populate({
            path:'userResturants'
        }).execPopulate();
        res.send(req.user.userResturants)
    }
    catch(e){res.send({err:e.message})}
})
router.get('/resturant/showSingle/:id', async(req,res)=>{
try{
    resturant = await Resturant.findById({_id: req.params.id})
    res.send({resturant})
}
catch(e){
    res.send(e.message)
}
})
router.post('/resturant/addBranch/:id',auth, async(req,res)=>{
    try{
        resturant = await Resturant.findOne({_id: req.params.id, owner:req.user._id})
        let manager = await User.findById({_id:req.body.manager})
        if(!manager) throw new Error('invalid manager data')
        branchData = {bName:req.body.bName, manager: req.body.manager}
        resturant.branches.push({branch:branchData})
        resturant.save()
        res.send({resturant})
    }
    catch(e){
        res.send({err:e.message})
    }
    })
module.exports = router