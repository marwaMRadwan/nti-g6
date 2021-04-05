require('./db/connection')
const express = require('express')
const userModel = require('./models/user')

const app= express()
app.use(express.json())

app.post('/addUser',(req, res)=>{
    const userData = new userModel(req.body)
    userData.save().then(()=>res.send('added')).catch(e=>res.send(e.message))
})

app.post('/register', async(req, res)=>{
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

app.get('/allUsers', (req, res)=>{
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

app.get('/allUsers1', async(req, res)=>{
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

app.get('/allUsers/:id', async(req,res)=>{
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


app.delete('/allUsers/:id', async(req,res)=>{
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


app.listen(3000)