const express = require('express')
const multer = require('multer')
const app = express()
app.use(express.urlencoded())

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html')
})
let storage = multer.diskStorage({
    destination: function(req,file, cb){
        cb(null, 'images')
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    }
})
let upload = multer({storage: storage})
app.post('/upload/photo', upload.array('myFile'),(req, res, next)=>{
 try{
    const file = req.files
    console.log(file)
    if(!file) return res.send('error')
    res.send(file)
 }
 catch(e){res.send(e)}
})

app.listen(3000)