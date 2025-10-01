console.log("Promises")

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("No random number was not supporting 1")
    }
    else {
        setTimeout(() => {
            console.log("Yes i am done 1")
            resolve("Harry 1")
        }, 2000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("No random number was not supporting 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes i am done 2")
            resolve("Harry 2")
        }, 2000);
    }
})

// prom1.then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// })

//promise.finally used to cleanup task like close all files that we have opened.
//promise chain used and make them pass resolved value one another

// promise.all(Promise)  instead of individually we can use array for promise handling
// let p3=Promise.all([prom1,prom2])
// p3.then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// })

//promise.allSettled(Promise)   settled means promises are resolved or rejected we will get status of all promises
// let p3=Promise.allSettled([prom1,prom2])
// p3.then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// })

//promise.race(Promise)    first promise is settled then its result or error become the outcome
// let p3=Promise.race([prom1,prom2])
// p3.then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// })

// Promise.any(Promise)      first promise is resolved than its result or error become the outcome
// let p3=Promise.race([prom1,prom2])
// p3.then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// })

// Promise.resolve(value)   makes a resolved promise with value
// let p3=Promise.resolve([prom1,prom2])
// p3.then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// })

// Promise.reject(error)   makes a resolved promise with error
let p3=Promise.reject([prom1,prom2])
p3.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
})