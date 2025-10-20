// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal;   //sets rabbit.[[prototype]] = animal  now eats can be accecced in rabbit object also

// console.log(rabbit.eats)    //true as we have set animal prototype to rabbit

class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is created.")
    }
    eats() {
        console.log("I am eating.")
    }
    jumps() {
        console.log("I am jumping.")
    }
}

let a = new Animal("Bunny");  //a is object of class Animal

console.log(a)
console.log(a.eats())   //I am eating.
console.log(a.jumps())   //I am jumping.
console.log(a.name)   //Bunny

class Lion extends Animal {   //Lion is a childclass of Animal it inherits all properties of Animal
    constructor(name) {
        super(name)   //calling parent clas constructor
        console.log("Child class object is created.")
    }
    eats() {   //Method overriding
        super.eats() //acceccing super class method here first we are calling super class eats then mpdifing class
        console.log("I am eating and Roar")
    }
}
let b = new Lion("Shera")
console.log(b.name)
console.log(b.eats())   //I am eating. I am eating and Roar
console.log(b.jumps())   //I am jumping.

console.log(b instanceof Lion)   // TRUE check weather b is object of Lion
console.log(b instanceof Animal)   // TRUE because b is object of Lion lion is child class of Animal
console.log(a instanceof Lion)    //False because a is objevt of Animal not Lion