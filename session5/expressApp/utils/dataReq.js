const request = require('request')
url = "https://jsonplaceholder.typicode.com/photos?_limit=10"
const myReq = (callback)=>{
    request({url, json:true}, (error, {body})=>{
        if(error){
            callback(error, false)
        }
        else{
            callback(false, body)
        }
    })
}
module.exports={myReq}