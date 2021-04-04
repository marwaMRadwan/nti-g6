const express = require('express')
const hbs = require('hbs')
const path = require('path')
const fs = require('fs')
const app = express()
const publicDir = path.join(__dirname, '../public')
const viewsDir = path.join(__dirname, '../design/views')
const layouts = path.join(__dirname, '../design/layouts')
const dbconnection = require('./utills/functions')
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
    dbconnection(db=>{
        if(!db) return console.log('fe error')
        db.collection('tasks').insertOne(data, (err,data)=>{
            if(err) console.log(err)
            else console.log(data.insertedCount)
        })
    })
    res.redirect('showAll')
})

app.get('/showAll', (req,res)=>{
    dbconnection(db=>{
        if(!db) return res.send('404', {error: 'error in show data'})
        db.collection('tasks').find().toArray((err, result)=>{
            if(err) res.send('404', {error:err})
            else res.render('allData',{data:result, len:result.length})
        })
    })
})

app.get('*', (req, res)=>{
    res.render('404', {error:'invalid url'})
})
app.listen(3000)