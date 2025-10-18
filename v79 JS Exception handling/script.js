//JAVASCRIPT errors MDN reference
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors

let a = prompt("Enter first number")

let b = prompt("Enter second number")

try {
    if (isNaN(a) || isNaN(b)) {
        throw SyntaxError("Sorry this is not allowed!")
    }
}
catch (SyntaxError) {
    console.log("Non integer numbers are not allowed.")
}

let sum = parseInt(a) + parseInt(b)//converts string to integer

let X=1
function main(){
    try {
        console.log("The sum is : ", sum * X)  //X is not defined
        return true
    }
    catch (error) {
        // alert(error.name)
        // alert(error.message)   //we can display error name,message & stack
        // alert(error.Stack)
        console.log("Error aa gaya bhai X not defined")
        return false
    }

    //after return below statements will not be executed
    //by using finally we can execute them
    
    finally{
        console.log("Files and DB connection are being closed.")
    }
}
let c=main()