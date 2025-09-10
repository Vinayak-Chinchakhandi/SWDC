let random = Math.random()

let a= prompt("Enter first operand.")
let b= prompt("Enter second operand.")
let c= prompt("Enter operator.")

let obj = {
    "+": "-",
    "-": "+",
    "*": "/",
    "/": "**"
}

if(random<0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
else{
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}