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
setAllBook = (data)=>{
    try{
        if(typeof data !== 'object') throw new Error('invalid data')
        fs.writeFileSync('books.json', JSON.stringify(data))
    }
    catch(err){
        console.log(err)
    }
}
addNewBook = (book) =>{
    const books = getAllBooks()
    const isUsed = books.find((mybook)=> mybook.name == book.name)
    if(isUsed) console.log('name used before')
    else{
        books.push(book)
        setAllBook(books)
        console.log('book added')
    }
}

module.exports = {
    getAllBooks,
    setAllBook,
    addNewBook
}