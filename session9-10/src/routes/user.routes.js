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
        console.log(req.body)
        const user = new User(req.body)
        await user.save()
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

module.exports=router