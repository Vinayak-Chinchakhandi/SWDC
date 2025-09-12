function factfor(x) {
    console.log("factorial using for loop")
    let fact = 1;
    if (x == 0) {
        console.log("Factorial of 0 is 1.")
    }
    else if (x < 0) {
        console.log("Factorial of negative number donot exist.")
    }
    else {
        for (let index = 1; index <= x; index++) {
            fact *= index;
        }
        console.log("Factorial of " + x + " is " + fact + ".")
    }
}


//================================================================================


function factred(x) {
    console.log("factorial using reduce")
    if (x == 0) {
        console.log("Factorial of 0 is 1.")
    }
    else if (x < 0) {
        console.log("Factorial of negative number donot exist.")
    }
    else {
        let arr = []
        for (let index = 1; index <= x; index++) {
            arr[index - 1] = index;
        }
        const fact = (a, b) => {
            return a * b
        }
        console.log("Factorial of " + x + " is " + arr.reduce(fact) + ".")
    }
}


factfor(5)
factred(5)