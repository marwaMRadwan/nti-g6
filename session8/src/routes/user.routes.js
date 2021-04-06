const express = require('express')
const userModel = require('../models/user.model')
const router = new express.Router()
const auth = require('../middleware/auth')
router.post('/register', async(req, res)=>{
    try{
        const userData = new userModel(req.body)
        await userData.save()
        res.status(200).send({
            apiStatus: true,
            data:userData,
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
router.post('/login', async(req,res)=>{
    try{
        const user = await userModel.findUser(req.body.email, req.body.password)
        // if(user.tokens.length>4) throw new Error('tokens kteer')
        const token = await user.generateToken()
        res.send({user, token})
    }
    catch(e){
        res.send(e.message)
    }
})
router.get('/profile', auth, async(req,res)=>{
    res.send(req.user)
})
router.post('/logoutAll', auth, async(req,res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.send('logged out')
    }
    catch(e){
        res.status(500).send({error:e.message})
    }
})
router.post('/logout', auth, async(req,res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((t)=>{
            return t.token !==req.token
        })
        await req.user.save()
        res.send('logged out')
    }
    catch(e){
        res.status(500).send({error:e.message})
    }
})

router.get('/allUsers', async(req, res)=>{
    try{
        let users = await userModel.find({name:'marwa'})
        res.status(200).send({
            apiStatus:true,
            data:users,
            message:'all users retrived'
        })
    }
    catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:'error loading data'
            })
        }
})

router.get('/allUsers/:id', async(req,res)=>{
    _id= req.params.id
    try{
        const user = await userModel.findById(_id)
        res.status(200).send({
            apiStatus:true,
            data: user,
            message:"data retrived"
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            data: e.message,
            message: 'error loading data'
        })
    }
})

router.delete('/allUsers/:id', async(req,res)=>{
    _id= req.params.id
    try{
        const user = await userModel.findByIdAndDelete(_id)
        if(!user) res.status(200).send({
            apiStatus:true,
            data:'not found',
            message: 'cann\'t find user'
        })
        res.status(200).send({
            apiStatus:true,
            data: user,
            message:"data retrived"
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            data: e.message,
            message: 'error loading data'
        })
    }
})

//allowed updates => , updates =>
router.patch('/allUsers/:id', async(req, res)=>{
    const myAllowedEdits = ['name', 'age', 'password'];
        const reqUpdates = Object.keys(req.body)
        isValidUpdates = reqUpdates.every(u=> myAllowedEdits.includes(u))
        if(!isValidUpdates) res.status(500).send({
            apiStatus:false,
            data:'invalid updates',
            message:'invalid updates'
        })
    try{
        // const user = await userModel.findByIdAndUpdate(req.params.id, req.body,
        //     {runValidators:true, new:true})
        // if(!user) throw new Error('user not found')
        // res.status(200).send({
        //     apiStatus:true,
        //     data:'',
        //     message:'updated'
        // })
        const user = await userModel.findById(req.params.id)
        reqUpdates.forEach(u=>{
            user[u] = req.body[u]
        })
        await user.save()
        res.status(200).send({
                apiStatus:true,
                data:'',
                message:'updated'
            })
    }
    catch(e){res.status(500).send({
        apiStatus:false, data:'', message:e.message
    })}
})

module.exports= router