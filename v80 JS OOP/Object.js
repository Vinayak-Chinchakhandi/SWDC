// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal;   //sets rabbit.[[prototype]] = animal  now eats can be accecced in rabbit object also

// console.log(rabbit.eats)    //true as we have set animal prototype to rabbit

class Animal{
    constructor(name){
        this.name=name
        console.log("Object is created.")
    }
    eats(){
        console.log("I am eating.")
    }
    jumps(){
        console.log("I am jumping.")
    }
}

let a = new Animal("Bunny");  //a is object of class Animal

console.log(a)
console.log(a.eats())   //I am eating.
console.log(a.jumps())   //I am jumping.
console.log(a.name)   //Bunny