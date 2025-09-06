alert("Hello World");
console.log("Code is running....")
console.log("hi")
console.log("hello")
console.log("how are you")

var a = prompt("Enter your number")
var istrue = confirm("Are you sure you want to leave this page")

if(istrue){
    console.log("yes you will go out of this page")
}
else{
    console.log("you can stay in this page")
}

console.log("Your number is " + a)

// from here title is changed
document.title = "JS"

//we can change style
document.body.style.backgroundColor = "red"