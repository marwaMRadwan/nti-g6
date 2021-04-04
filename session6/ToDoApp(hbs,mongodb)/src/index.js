const express = require('express')
const hbs = require('hbs')
const path = require('path')
const fs = require('fs')
const app = express()
const publicDir = path.join(__dirname, '../public')
const viewsDir = path.join(__dirname, '../design/views')
const layouts = path.join(__dirname, '../design/layouts')
const dbconnection = require('./utills/functions')
const { ObjectID } = require('mongodb')
app.set('view engine', 'hbs')
app.set('views',viewsDir)
hbs.registerPartials(layouts)
app.use(express.static(publicDir))
app.use(express.urlencoded())

app.get('', (req,res)=>{
    res.render('index')
})

app.get('/add', (req,res)=>{
    res.render('add', {data:{title:'', description:''}})
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

app.get('/single/:id', (req,res)=>{
    id = req.params.id
    try{
        dbconnection(db=>{
            try{
                db.collection('tasks').findOne({_id:new ObjectID(id)}, (err,data)=>{
                    if(err) res.render('404', {error:'no data'})
                    else res.render('singleData', {data})
                })  
            }
            catch(e){ res.render('404', {error:'no data found'}) } 
        })
       
    }
    catch(e){ res.render('404', {error:'no data found'}) } 
})
app.get('/delete/:id', (req,res)=>{
    id = req.params.id
    
    dbconnection(db=>{
        db.collection('tasks').deleteOne({_id:new ObjectID(id)})
        .then(()=>res.redirect('/showAll'))
        .catch(()=>res.redirect('404', {error: 'cann\'t delete'}))
    })    
})
app.get('/edit/:id', (req,res)=>{
    res.render('add', {data:{title:'a', description:'b'}})
})
app.get('*', (req, res)=>{
    res.render('404', {error:'invalid url'})
})
app.listen(3000)