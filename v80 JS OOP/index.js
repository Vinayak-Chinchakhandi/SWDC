console.log("Object oriented programming")

let obj = {
    a: 1,
    b: "Hi"
}

//each object has prototype which is also a object it has additional attributes of object
//it contains many functions that can be called using object

console.log(obj)
console.log(obj.a)   //1
console.log(obj.c)   //undefined c is not present in object obj

let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;   //sets rabbit.[[prototype]] = animal  now eats can be accecced in rabbit object also

console.log(rabbit.eats)    //true as we have set animal prototype to rabbit