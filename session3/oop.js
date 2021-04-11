// class User{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     getDetails(){
//         console.log(`name is : ${this.name} and age is ${this.age}`)
//     }
// }
// class Student extends User{
//     constructor(name,age,grades){
//         super(name,age)
//         this.grades = grades
//     }
// }
// const ahmed = new User('ahmed',30)
// ahmed.getDetails()



class X{
    hello(){
        console.log('x')
    }
}
class Y{
    hello(){
        // super.hello()
        console.log('y')
    }
}

function hello(obj){obj.hello()}
x= new X()
y=new Y()
hello(x)
hello(y)