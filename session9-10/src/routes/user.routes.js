const express= require('express')
const multer = require('multer')
const User = require('../models/user.model')
const auth = require('../middleware/auth')
const router = new express.Router()
const fs = require('fs')

let upload = multer({dest:'images/profile'})
router.post('/upload', upload.single('image'),(req,res)=>{
    filename = req.file.destination + '/'+req.file.filename
    result = `${filename}.${req.file.originalname.split('.').pop()}`
    fs.rename(filename, result, function(err){
        if(err) console.log(err)
    })
    res.send(req.file)
} )

router.post('/user/register', async (req,res)=>{
    try{
        const user = new User(req.body)
        await user.save()
        //SEND ACTIVATON OTP, SEND EMAIL
        res.status(200).send({
            apiStatus:true,
            data:{user},
            message:'user added'
        })
    }
    catch(e){
        res.status(500).send({
            apiStatue:false,
            data: e.message,
            message:"error in add new user"
        })
    }
})

router.get('/user/activate/:id', async(req,res)=>{
    try{
        const _id = req.params.id
        const user = await User.findById({_id})
        if(!user) throw new Error('invalid user id')
        user.status = true
        await user.save()
        res.status(200).send({
            apiStatus:true,
            data: {user},
            message:'activated'
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            data: e.message,
            message:'error activating'
        })
    }
})

router.get('/user/deactivate/:id', async(req,res)=>{
    try{
        const _id = req.params.id
        const user = await User.findById({_id})
        if(!user) throw new Error('invalid user id')
        user.status = false
        await user.save()
        res.status(200).send({
            apiStatus:true,
            data: {user},
            message:'activated'
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            data: e.message,
            message:'error activating'
        })
    }
})

router.post('/user/login', async(req,res)=>{
    try{
        const user = await User.findByCredintials(req.body.email, req.body.password)        
        res.status(200).send({
        apiStatus:true,
        data: {user},
        message:'activated'
    })
}
catch(e){
    res.status(500).send({
        apiStatus:false,
        data: e.message,
        message:'error activating'
    })
}

})

module.exports=router