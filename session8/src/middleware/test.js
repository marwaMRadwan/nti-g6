const myTest = async(req, res, next)=>{
console.log('hello')
next()
}

module.exports = myTest