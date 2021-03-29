// arr = [
//     {name:'ahmed', age:25},
//     {name:'hasan', age:27},
//     {name:'mohamed', age:29},
//     {name:'nouran', age:26}
// ]
// arr.forEach((element, i) => {
//     console.log(`${i} - name=> ${element.name} - age=> ${element.age}`)
// });
//find findIndex filter

// x = arr.find(element=>{
//     return element.name == 'nouran'
// })
// x=  arr.findIndex(element=>{
//     return element.name=='nouran'
// })
// x = arr.filter(element=>{
//     return element.name.includes('o')
// })
// console.log(x)
// console.log(this)
// obj ={
//     data:'hello',
//     getData:()=>{
//         console.log(this)
//     }
// }
// obj.getData()

// let add = () => {

// }
// add1=function(){
// return 5+3
// }
// function add2(){

// }

//clousers
// const counter = () =>{
//     c=10
//     return{
//         c,
//         inc(){c++},
//         dec(){c--},
//         show(){return c}
//     }
// }
// const myCall = counter()
// myCall.inc()
// myCall.dec()
// myCall.inc()
// console.log(myCall.show())

// const myClousre = (a,b)=>{
//     result =0
//     return{
//         add(){return a+b},
//         sub(){result = a-b},
//         resultval(){return result}
//     }
// }
// const m = myClousre(5,3)
// m.add()

//callback
// console.log('a')
// setTimeout(()=>{console.log('c'),2000})
// console.log('b')
// const x =(v, cb)=>{
//     if(typeof v == 'number'){cb(false, v**2)}
//     else {cb('not a number', false)}
// }

// x('hh', (err, value) => {
//     if(err) console.log(err)
//     else console.log(value)
// })
//promise
const myPromise = (v) => new Promise((resolve,reject)=>{
    setTimeout(()=>{
    typeof v==="number"?
    resolve(v**2)
    : reject('not a number')
    },2000)
})
// myPromise('hghh').then(
//      (data)=>console.log(data)
//     , (err)=>console.log(err)
// )
const myCall = async() =>{
    data =  await myPromise(2)
    console.log(data)    
}
// myCall()
console.log('ay 7aga')
console.log(myPromise(6))


