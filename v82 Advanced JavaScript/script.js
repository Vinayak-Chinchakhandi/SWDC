//========================IIFE (Imediately Invoke Function Expression)========================

async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

//IIFE function
// ( async function main(){
//     let a= await sleep()
//     console.log(a)
//     let b= await sleep()
//     console.log(b)
// })()

//===================================Destructuring============================================

(async function main(){
    // let x,y =[1,5]                               //x=undefined,  y= array of 1&5
    // console.log(x,y)   //undefined (2) [1, 5]

    // let[x,y]=[1,5]
    // console.log(x,y)     //1,5

    // let [x,y] = [1,5,7]                         //x=1, y=5, 7 is not assigned
    // console.log(x,y)    //1,5

    //DESTRUCTURING
    // let [x,y,...rest]=[1,5,7,3,7,9,6,4]            //x=1, y=5, rest = array of remaining
    // console.log(x,y,rest)   //1 5 (6) [7, 3, 7, 9, 6, 4]

    let obj = {
        a:1,
        b:2,
        c:3
    }

    let {a,b} = obj    //extract a * b from obj
    console.log(a,b)   //1 ,2 
})()

//===================================Spread Syntax============================================
function sum(a,b,c){
    return a+b+c
}

let arr = [1,4,6]

let obj = {...arr}   //map array elements to object obj
console.log(obj)     //{0: 1, 1: 4, 2: 6}

console.log(arr[0]+arr[1]+arr[2])   //general method            =>11
console.log(sum(...arr))    //...arr means spread array arr     =>11