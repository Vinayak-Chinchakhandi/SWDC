console.log("HI hello how are you")

//let is a block scope if declared in particular block then accessed only in that block 

//let is a block scope
//var is a global scope

let a=5;
//a=a+1; //this is valid as a is variable
var b=4;
var c="good morning"
var _a="AKash"  //valid variable name cannot start with _

//var 55a= "Amit" //not valid cannot start with number

//Java script is case sensitive

console.log(a+b+8)
console.log(typeof a, typeof b, typeof c)

// const a1=6;
// a1 = a1 + 5; // we cannot do that because a1 is declared as constant

{
    let a =10;
    var b= 2;
    console.log("a="+a)  //OUTPUT 10 a is declared as let in this block with value 10
    console.log("b="+b)  //OUTPUT 2 now b value globally changed to 2
}

console.log("a="+a)     //OUTPUT 5 in global outer block a is declared as let and assigned 5
console.log("b="+b)     //OUTPUT 2 because b value globaly changed to 2

//DATA TYPES

//two types of data types object and primitive

//Object datatype is like user defined datatype
//primitive datatype is basic datatype building block of other data types


//PRIMITIVE DATATYPES
// null =>means empty
// Number, 
// String => assigned using "", 
// Symbol, 
// undefined =>variable declared but it has no value, 
// Boolean, 
// BigInt

let x = "JavaScript";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)


//OBJECT

let o ={
    //key: value
    "name": "Akash",
    "job code": 5600,
    "isHandsome": true
}

console.log(o);

o.age = 25;

console.log(o);