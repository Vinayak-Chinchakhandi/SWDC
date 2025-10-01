//==========ASYNCHRONOUS NATURE OF JAVASCRIPT==============
//JS will execute in order they have written

// but in asynchronous nature for example here setTimeout function has to be executed after 2 seconds 
// but it do not wait for 2 seconds first it will execute next statements end then as 2 seconds happens 
// it will execute Timeout function 

//even if we set interval 0 second then also first end executed after setTimeout function will execute

console.log("hi hello")
console.log("how are you")

setTimeout(() => {
    console.log("Inside timeout function1")
}, 0);

setTimeout(() => {
    console.log("Inside timeout function2")
}, 0);

console.log("end")

//==========================CALLBACKS=============================================
//here one function is passed as an argument to the another function

const callback = (arg) => {
    console.log(arg)
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("Hello")
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

//if we donot pass the function as an argument then we have to write function as an argument while calling function
// if that function again taking function as an argument then we have to add one more function as an argument in that function

//========EXAMPLE===========

// const fun = (a, f1 = (b, f2 = (c) => {
//     console.log("f2")
// }
// ) => {
//     console.log("f1")
// }

// ) => {
//     console.log("fun")
// }

//this condition is called "CALLBACK HELL" also called "PYRAMID OF DOOM" to avoid this we use promises