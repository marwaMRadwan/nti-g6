require('./db/connection')
const express = require('express')
const userRoutes = require('./routes/user.routes')
const app= express()
app.use(express.json())
app.use(userRoutes)

// bcrypt = require('bcryptjs')

// let a = async()=>{
//     pass='1234'
//     hashed = await bcrypt.hash(pass, 10)
//     console.log(hashed)
//     isTrue = await bcrypt.compare(pass, hashed)
//     console.log(isTrue)
// }
// a()
app.listen(3000)
