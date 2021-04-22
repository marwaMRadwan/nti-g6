const sqlite3 = require('sqlite3').verbose()
const md5 = require('md5')
const dbSource ="mydb.sqlite"
const db = new sqlite3.Database(dbSource, (err)=>{
    if(err){
        console.log(err.message)
        throw err
    }
    else{
        console.log('conntected')
        // db.run(`CREATE TABLE task(
        //     id INTEGER PRIMARY KEY AUTOINCREMENT,
        //     title TEXT,
        //     userId Integer NOT NULL,
        //     FOREIGN KEY(userId) REFERENCES user(id)
        // )`),
        // (err)=>{
        //     if(err){return console.log('table already created')}
        //     else{
        //     }
                // const insert ="INSERT INTO user (name, email,pass) VALUES (?,?,?)"
                // db.run(insert, ["marwa", "marwa@test.com", md5('123456')])
                // console.log('done')
        //     }
    //     }
    }
})
module.exports = db