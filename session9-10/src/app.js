const express= require('express')
const cors = require('cors')
require('./db/db')
const userRoutes = require('./routes/user.routes')
const restRoutes = require('./routes/resturants.routes')
const app=express()
app.use(cors())
app.use(express.urlencoded());
app.use(express.json());
app.use(userRoutes)
app.use(restRoutes)
module.exports=app
