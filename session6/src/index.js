const express = require('express')
const hbs = require('hbs')
const path = require('path')
const fs = require('fs')
const { urlencoded } = require('express')
const app = express()
const publicDir = path.join(__dirname, '../public')
const viewsDir = path.join(__dirname, '../design/views')
const layouts = path.join(__dirname, '../design/layouts')
app.set('view engine', 'hbs')
app.set('views',viewsDir)
hbs.registerPartials(layouts)
app.use(express.static(publicDir))
app.use(express.urlencoded())  //form => body 
//app.use(express.json()) => body api
//routes
// app.get('/new', (req,res)=>{
// fs.writeFileSync('src/data.json', '[]')
// res.send('done')
// })
dataHeades = ['name', 'password', 'email']
app.get('', (req,res)=>{
    res.render('index')
})

app.get('/add', (req, res)=>{
    if(req.query.name){
        try{
            allData = JSON.parse(fs.readFileSync('src/data.json').toString()) 
        }
        catch(e){ 
            allData=[]
        }
        try{    
            let singleData = {}
            dataHeades.forEach(head=>{ singleData[head] =req.query[head]})
            allData.push(singleData)
            fs.writeFileSync('src/data.json', JSON.stringify(allData))
            res.redirect('showAll')
        }
        catch(e){
            res.render('404')
        }    
    }
    else{
       res.render('add') 
    }
})

app.get('/showAll',(req,res)=>{
    res.send('all')
})

app.listen(3000)