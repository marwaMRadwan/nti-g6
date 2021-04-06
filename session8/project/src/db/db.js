const mongoose = require('mongoose')
try{
    mongoose.connect(process.env.MONGO_URL,{
        useCreateIndex:true,
        useFindAndModify:true,
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
}
catch(e){
    console.log(e)
}