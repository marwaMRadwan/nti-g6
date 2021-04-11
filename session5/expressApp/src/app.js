//initilize express instance
const express= require('express')
const dataReq = require('../utils/dataReq')
const path = require('path')
const hbs = require('hbs')
const app = express()
const publicDir = path.join(__dirname,'../public')
const viewsDir = path.join(__dirname, '../template/views')
const partialsDir = path.join(__dirname, '../template/layout')
app.use(express.static(publicDir))
app.set('view engine', 'hbs')
app.set('views', viewsDir)
hbs.registerPartials(partialsDir)
//routing
app.get('',(req, res)=>{
    dataReq.myReq((err, data)=>{
        htmlData=''
        data.forEach(element => {
            htmlData+=`<img src= "${element.url}" width=100 height=100>`
        });
        res.send(htmlData)
    })
   // res.send({name:'a', age:'nhjb'})
})
app.get('/test',(req,res)=>{
    res.sendFile(publicDir+'/a.html')
})
app.get('/hbs', (req,res)=>{
    let name = "marwa"
    res.render('myHome',{
        name:name
    }) //views/myHome.hbs =>html
})
//listen app (run on port)
app.listen(3000,()=>{
    console.log('run on localhost')
}) //localhost:3000