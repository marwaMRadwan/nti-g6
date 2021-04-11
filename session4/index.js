// fs = require('fs')
// fs.writeFileSync('x.txt','hello')
// x = fs.readFileSync('x.txt').toString()
// console.log(x)

// data = [{a:1,b:2},{a:2,b:3}]
// fs.writeFileSync('data.json', JSON.stringify(data))
// myData = JSON.parse(fs.readFileSync('data.json').toString())
// console.log(myData[0])

// h = require('./myFunctions')
// h.hello()
// var validator = require('validator');

// console.log(validator.isEmail('foo@bar.com'))

// console.log(validator.isMobilePhone('01711111111','ar-EG'))
// const chalk = require('chalk')
// console.log(chalk.blue('Hello world!'));

//node index num1 oper num2
// let op = process.argv[3]
// console.log( +process.argv[2] + +process.argv[4])

// node index t c
// tasks = [{title:t, content:c}]


const yargs = require('yargs')

yargs.command({
    command:'hello',
    describe:'hello desc',
    builder:{
        name:{
            describe:'user name',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        console.log(`hello ${argv.name}`)
    }
})
yargs.command({
    command:'bye',
    handler:function(){
        console.log('bye')
    }
})
yargs.argv






