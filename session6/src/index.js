const express = require('express')
const hbs = require('hbs')
const path = require('path')
const fs = require('fs')
const app = express()
const publicDir = path.join(__dirname, '../public')
const viewsDir = path.join(__dirname, '../design/views')
const layouts = path.join(__dirname, '../design/layouts')

app.set('view engine', 'hbs')
app.set('views',viewsDir)
hbs.registerPartials(layouts)
app.use(express.static(publicDir))
//routes
// app.get('/new', (req,res)=>{
// fs.writeFileSync('src/data.json', '[]')
// res.send('done')
// })

app.get('', (req,res)=>{
    res.render('index')
})

app.get('/add', (req, res)=>{
    console.log(req.query)
    res.render('add')
})

app.listen(3000)