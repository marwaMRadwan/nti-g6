//require request to access api
const request = require('request');
//intiliza api common string
const mainApi = 'https://jsonplaceholder.typicode.com/posts';
//get all posts from api
// const allPost = (callback) =>{
//     request({url:mainApi, json:true},(err,{body})=>{
//         if(err) callback('error loading data', false)
//         else callback(false, body)
//     })
// }
//get single post using id
const singlePost = (callback, id=false) =>{
    if(id) url = mainApi+'/'+id
    else url = mainApi
    console.log(mainApi)
    request({url, json:true},(err,{body})=>{
        if(err){ callback('error loading data', false)}
        else {callback(false, body)}
    })
}

//export function to use outside file
module.exports = {
  //  allPost,
    singlePost
}