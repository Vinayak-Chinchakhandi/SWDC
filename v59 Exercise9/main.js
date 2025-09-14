console.log("Faulty calculator");
//performs fault operation 10% of times

let random = Math.random();

function faultycalculator() {
    const r = require("readline");

    const rl = r.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter first operand: ", (a) => {
        rl.question("Enter second operand: ", (b) => {
            rl.question("Enter operator (+, -, *, /): ", (c) => {
                a = Number(a);
                b = Number(b);

                if (random < 0.1) {
                    // faulty logic
                    if (c === "+") {
                        console.log(a - b);
                    } else if (c === "-") {
                        console.log(a + b);
                    } else if (c === "*") {
                        console.log(a / b);
                    } else if (c === "/") {
                        console.log(a ** b);
                    } else {
                        console.log("Enter valid operator.");
                    }
                } else {
                    // normal logic
                    if (c === "+") {
                        console.log(a + b);
                    } else if (c === "-") {
                        console.log(a - b);
                    } else if (c === "*") {
                        console.log(a * b);
                    } else if (c === "/") {
                        console.log(a / b);
                    } else {
                        console.log("Enter valid operator.");
                    }
                }

                rl.close();
            });
        });
    });
}

faultycalculator();
