require('./db/connection')
const express = require('express')
const userRoutes = require('./routes/user.routes')
const app= express()
app.use(express.json())
app.use(userRoutes)

// jwt = require('jsonwebtoken')

// let a = async()=>{
//     const token = jwt.sign({_id:1234}, 'secret')
//     console.log(token)
//     const decoded= jwt.verify(token, 'secret')
//     console.log(decoded)
// }
// a()
// const x = require('./middleware/test')
// app.get('/test',x, (req,res)=>{
//     res.send('test')
// })
app.listen(3000)
