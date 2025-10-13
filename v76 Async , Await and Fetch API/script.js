// async function getdata() {
//     //simulate getting data from server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

// settle means resolve or reject 
// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function getdata() {
    //simulate getting data from server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //here we are using fetch api, now time require to load data from the server,
    //  using await we are waiting untill data loaded
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.json()
    return data
} 

async function main() {

    console.log("Loading modules")

    console.log("Still loading modules")

    console.log("Load data")

    let data = await getdata()

    //USING ASYNC WE CAN STOP CODE UNTIL DATA LOADED 
    //for that we declare function as async function while calling call using await

    console.log(data)

    console.log("Process data")

    console.log("Task2")
}

main()

// data.then((v)=>{//now the below code will wait until the data is loaded means for 3.5 seconds

//     console.log(data)

//     console.log("Process data")

//     console.log("Task2")
// })
