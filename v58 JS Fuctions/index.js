function nice(name) {
    console.log("Hey " + name);
    console.log("Hello " + name);
    console.log("How are you " + name);
}

nice("Akash");
nice("Amit");
nice("Ashok");

function sum(a, b, c = 4) {
    console.log(a, b, c);
    return a + b + c
}

result1 = sum(5, 6)//c value default 4 will be taken
result2 = sum(5, 8)
result3 = sum(8, 6, 1)// c  value is passed so passed value(1) is considerd.

console.log("The sum of these two numbers is " + result1)
console.log("The sum of these two numbers is " + result2)
console.log("The sum of these two numbers is " + result3)

result = sum(12)//now b value is not passed it will give error and b value undefined
console.log(result)//it will display NAN means not a number as b is undefined


//============ARROW FUNCTION +++++++++++++==========
const myfun = (x) => {
    console.log("This is a arrow function ", x)
}
myfun(45)
myfun(28)
myfun(74)