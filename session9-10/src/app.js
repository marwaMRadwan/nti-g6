const express= require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
require('./db/db')
const userRoutes = require('./routes/user.routes')
const app=express()
app.use(cors())
app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(userRoutes)
module.exports=app
