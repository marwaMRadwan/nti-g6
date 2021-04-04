//npm i mongodb
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const {MongoClient, ObjectID} = require('mongodb')
const dbURL = 'mongodb://127.0.0.1:27017'
const dbName = 'g6test'
// console.log(new ObjectID())
// console.log(new ObjectID('60699a1deaf5612b44336fa8'))
MongoClient.connect(dbURL, {
    useNewUrlParser:true, 
    useUnifiedTopology:true
}, (err, client)=>{
    if(err) return console.log(err)

    const db = client.db(dbName)
    //insert
    // db.collection('user').insertMany([{name:'marwa'}, {name:'nouran'}, {name: 'omar'}], (err, res)=>{
    //     if(err) console.log(err)
    //     else console.log(res.insertedCount)
    // })
    //show
    //show single
    //60699a1deaf5612b44336fa8
    // db.collection('user').findOne({_id:new ObjectID('60699a1deaf5612b44336fa8')},(err,data)=>{
    //     console.log(data)
    // })
    //show multiple
//     db.collection('user').find({name:'nouran'}).toArray((err, data)=>{
// if(err) console.log(err)
// else console.log(data)
//     })
    //edit
db.collection('user').updateMany(
    {name:'omar', age:{$exists:true}},{$inc:{age:1}}
).then(res=> console.log(res.modifiedCount))
.catch(e=>console.log(e))
    // delete
//     db.collection('user').deleteMany(
//         {name:'marwa'}).
//         then(res=>console.log(res.deletedCount))
//         .catch(e=> console.log(e))
})