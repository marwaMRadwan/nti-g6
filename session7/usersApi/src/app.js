require('./db/connection')
const express = require('express')
const userModel = require('./models/user')

const app= express()
app.use(express.json())

app.post('/addUser',(req, res)=>{
    const userData = new userModel(req.body)
    userData.save().then(()=>res.send('added')).catch(e=>res.send(e.message))
})

app.listen(3000)