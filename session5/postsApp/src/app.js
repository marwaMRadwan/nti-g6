//create instance from packages
const path = require('path')
const express = require('express')
const hbs = require('hbs')
//create instance from my files
const apiRequests = require('../functions/apiRequests')
//define main express app
const app = express()
//define port
const PORT = 3000
//define pathes tree of project
const publicDir = path.join(__dirname, '../public')
const viewsDir = path.join(__dirname, '../frontend/views')
const layoutsDir = path.join(__dirname, '../frontend/layouts')
//setup hbs engine
app.set('view engine', 'hbs')
app.set('views', viewsDir)
hbs.registerPartials(layoutsDir)
//set public static folder
app.use(express.static(publicDir))
//routes
app.get('', (req,res)=>{
    res.render('home')
})
app.get('/allPosts', (req,res)=>{
    apiRequests.singlePost((err, response)=>{
        if(err) res.render('allposts', { err:err ,data:false })
        else res.render('allposts', {err:false, data:response})
    })
})
app.get('/allPosts/:single', (req,res)=>{
    let id = req.params.single
    apiRequests.singlePost((err, response)=>{
        if(err) res.render('singlePost', { err:err ,data:false })
        else res.render('singlePost', {err:false, data:response})
    }, id)
})
//not found routes
app.get('*',(req,res)=>{
    res.render('404')
})
//end of routes
//run app on localhost
app.listen(PORT)