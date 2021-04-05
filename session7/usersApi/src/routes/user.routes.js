const express = require('express')
const userModel = require('../models/user.model')
const router = new express.Router()

router.post('/addUser',(req, res)=>{
    const userData = new userModel(req.body)
    userData.save().then(()=>res.send('added')).catch(e=>res.send(e.message))
})

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

router.get('/allUsers', (req, res)=>{
    userModel.find().then(
        users=>{
            res.status(200).send({
                apiStatus:true,
                data:users,
                message:'all users retrived'
            })
        }
    ).catch(
        e=>{
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:'error loading data'
            })
        }
    )
})

router.get('/allUsers1', async(req, res)=>{
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