const express= require('express')
const multer = require('multer')
const User = require('../models/user.model')
const auth = require('../middleware/auth')
const router = new express.Router()
const fs = require('fs')
router.get('/test', async(req, res)=>{
    res.send('test')
})

let upload = multer({dest:'images/profile'})
router.post('/upload', upload.single('image'),(req,res)=>{
    filename = req.file.destination + '/'+req.file.filename
    result = `${filename}.${req.file.originalname.split('.').pop()}`
    fs.rename(filename, result, function(err){
        if(err) console.log(err)
    })
    res.send(req.file)
} )

module.exports=router