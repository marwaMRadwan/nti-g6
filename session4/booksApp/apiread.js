const request = require('request')
x='hello'
const url =`https://jsonplaceholder.typicode.com/users`
const getApi = (cb)=>{
    request({ url, json:true },(err, {body})=>{
        if(err) cb(err, false)
        else cb(false, body)
    })
}

getApi((err,data)=>{
    if(err) console.log(err)
    else console.log(data)
})
