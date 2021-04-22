const express = require('express')
const app = express()
const db= require('./database')
const md5 = require('md5')
PORT =3000
app.use(express.json())
app.get('/', (req,res)=>{
    res.json({"data":"done"})
})
app.get('/allUsers', (req,res)=>{
    let query = "SELECT * FROM user"
    let params =[]
    db.all(query, params, (err,rows)=>{
        if(err){return res.send({error: err.message})}
        res.send({data: rows})
    })
})

app.get('/allUsers/:id', (req,res)=>{
    const query= "SELECT * FROM user WHERE id = ?"
    const params = [req.params.id] 
    db.get(query, params, (err, row)=>{
        if(err) return res.send({err:err.message})
        res.send(row)
    })
})
app.post('/add', (req,res)=>{
    let errors = []
    if(!req.body.pass) errors.push('please add a password')
    if(errors.length) return res.send(errors)
    data = req.body
    data.pass = md5(data.pass)
    db.run(
        "INSERT INTO user (name, email, pass) VALUES (?,?,?)",
        [data.name, data.email, data.pass],
        function(err, result){
            if(err) return res.send(err.message)
            res.send({id:this.lastID})
        }
    )
})
app.delete('/allUsers/:id', (req,res)=>{
    const query= "DELETE FROM user WHERE id = ?"
    const params = req.params.id 
    db.run(query, params, function(err, result){
        if(err) return res.send({err:err.message})
        res.send(this)
    })
})
app.patch("/allUsers/:id", (req,res)=>{
    db.run(
        'UPDATE user set name=COALESCE(?,name), email=COALESCE(?,email), pass=COALESCE(?,pass) WHERE id =?',
        [req.body.name, req.body.email, req.body.pass?md5(req.body.pass):undefined, req.params.id] ,
        (err, result)=>{
            if(err) return res.send(err.message)
            res.send(result)
        }
    )
})
app.post('/addTask/:userId', (req,res)=>{
    //title/userid
    db.run("Insert into task ('title', 'userId') Values (?,?)",
    [req.body.title, req.params.userId],
    function(err, result){
        if(err) return res.send(err.message)
        res.send(result)
    })
})
app.get('/allTasks', (req,res)=>{
    db.all('SELECT * FROM task',[],(err,data)=>{
        res.send(data)
    })
})
app.use(function(req,res){
    res.status(404).send()
})
app.listen(PORT)