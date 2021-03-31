const fs = require('fs')

getAllBooks = () => {
    let data
    try{
        data = JSON.parse(fs.readFileSync('books.json').toString())
    }
    catch(err){
        data = []
    }
    return data
}

module.exports = {
    getAllBooks
}