//https
const https = require('https');
apiurl ='https://jsonplaceholder.typicode.com/photos?_limit=5'
//https://newsapi.org/v2/top-headlines?apiKey=702e9ad75b684b2ba13de7a0b5cf6ba3
//country=us
//category=business&
//q=apple
//{country:'us',category:'bussiness','q':'apple'} 
let myReq = (attributes, cb)=>{
    apiurl = 'https://newsapi.org/v2/top-headlines?apiKey=702e9ad75b684b2ba13de7a0b5cf6ba3'
    Object.keys(attributes).forEach(attr=>{
        apiurl+=`&${attr}=${attributes[attr]}`
    })
    const request = https.request(apiurl, (response)=>{
        let data = ''
        response.on('data', (chunk)=>{
            data +=  chunk.toString()
        })
        response.on('end',()=>{
           // console.log(data)
           data= JSON.parse(data)
            cb(false, data)  
        })
    })
    request.on('error', (error)=>{
     //   console.log(error)
        cb(error, false)
    })
    request.end()
}
myReq({country:'us',category:'bussiness','q':'apple'} ,(reject, resolve)=>{
    if(reject)console.log(reject)
    else console.log(resolve)
})