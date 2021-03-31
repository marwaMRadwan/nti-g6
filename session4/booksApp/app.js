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

yargs.command({
    command:'addBook',
    describe:'add new book',
    builder:{
        name:{demandOption:true, type:'string'},
        author:{demandOption:true, type:'string'},
        category:{demandOption:true, type:'string'},
        numOfPages:{demandOption:true, type:'number'}
    },
    handler:function(argv){
        let book = {
            name:argv.name, 
            author:argv.author, 
            category: argv.category, 
            numOfPages:argv.numOfPages
        }
        myMethods.addNewBook(book)
    }
})

yargs.argv

