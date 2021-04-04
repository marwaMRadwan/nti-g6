//npm i mongodb
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const dbURL = 'mongodb://127.0.0.1:27017'
const dbName = 'g6test'

MongoClient.connect(dbURL, {
    useNewUrlParser:true, 
    useUnifiedTopology:true
}, (err, client)=>{
    if(err) return console.log(err)

    const db = client.db(dbName)
    //insert
    db.collection('user').insertMany([{name:'marwa'}, {name:'nouran'}, {name: 'omar'}], (err, res)=>{
        if(err) console.log(err)
        else console.log(res.insertedCount)
    })
    //show
    //edit
    // delete
})