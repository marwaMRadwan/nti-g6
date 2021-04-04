const {MongoClient, ObjectID} = require('mongodb')
const dbConnection = (cb) => {
    const dbUrl = 'mongodb://127.0.0.1:27017'
    const dbName = 'session6g6'
    MongoClient.connect(dbUrl,{}, (error, client)=>{
        if(error) return cb(false)
        const db = client.db(dbName)
        cb(db)
    })
}

module.exports = dbConnection