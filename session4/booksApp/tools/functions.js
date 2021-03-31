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
removeBook = (name)=>{
    const books = getAllBooks()
    const index = books.findIndex(book=> book.name==name)
    if(index==-1) return console.log('book not found')
    else{
        books.splice(index,1)
        setAllBook(books)
        console.log('deleted')
    }
}
searchBook = (searchKey, searchType, t) =>{
    const books = getAllBooks()
    const data = books.filter(book=>{
        if(t=="full") return book[searchType]==(searchKey)
        else return book[searchType].includes(searchKey)
    })
    console.log(data)
}
module.exports = {
    getAllBooks,
    setAllBook,
    addNewBook,
    removeBook,
    searchBook
}


