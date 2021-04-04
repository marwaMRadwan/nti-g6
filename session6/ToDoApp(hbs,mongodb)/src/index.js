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
app.use(express.urlencoded())

app.get('', (req,res)=>{
    res.render('index')
})

app.get('/add', (req,res)=>{
    res.render('add')
})

app.post('/addData', (req, res)=>{
    data = req.body
    console.log(data)
    res.redirect('showAll')
})

app.get('/showAll', (req,res)=>{
    res.render('allData')
})

app.get('*', (req, res)=>{
    res.render('404')
})
app.listen(3000)