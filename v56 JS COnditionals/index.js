console.log("Hi hello how are you")
console.log("Conditional tutorial")

let age = 1;
let grace = 2;

console.log(age)
console.log(age - grace)
console.log(age * grace)
console.log(age / grace)
console.log(age % grace)
console.log(age ** grace)  //exponential operator 3^2

// == equl to

// === equal value and type 
// example 7===7   => true
// 7==="7"   =>false

// &&   =>logical and
// ||   =>logical or
// !    =>logical not  
// example !true   =>false

if ((age + grace) > 18) {
    console.log("You can drive");
}
else if (age == 0) {
    console.log("Are you kidding");
}
else if (age == 1) {
    console.log("Are you again kidding");
}
else {
    console.log("You cannot drive");
}

let p = 2;
let q = 3;

//ternary condition
//(condition)?(true block):(False block);
(p > q) ? (console.log("p is greater")) : (console.log("q is greater"));