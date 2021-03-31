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
yargs.command({
    command:'removeBook',
    describe:'remove book',
    builder:{
        name:{type:'string', demandOption:true}
    },
    handler: function(argv){
        myMethods.removeBook(argv.name)
    }
})
yargs.command({
    command:'search',
    describe:'search book',
    builder:{
        searchKey:{demandOption:true},
        searchType:{demandOption:true},
        t:{}
    },
    handler:function(argv){
myMethods.searchBook(argv.searchKey, argv.searchType, argv.t)
    }
})
yargs.argv

