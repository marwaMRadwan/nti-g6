const chalk = require('chalk')
const validator = require('validator')
const yargs = require('yargs')
const myMethods = require('./tools/functions')

yargs.command({
    command: 'showAll',
    describe:'show all books',
    handler:function(){
        allBooks = myMethods.getAllBooks()
        if(allBooks.length==0) return console.log('no books founded')
        allBooks.forEach(book => {
            console.log(`book name: ${book.name} - author: ${book.author}`)    
        });
    }
})

yargs.argv