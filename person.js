
// const person ={
// name: 'M Saad',
// age:21
// }
// module.exports=person;

//ctr + / to comment
class Person{
    
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    greetings(){
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }

}
module.exports= Person;