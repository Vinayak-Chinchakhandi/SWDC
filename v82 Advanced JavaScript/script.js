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

//========================================Hoisting===========================================

console.log(a1)
var a1=6   //undefined because only var a1 is sent above not a1=6
//if we use let then will get error but we can declare a1 as var but it will be undefined 
//this can be possible only in the specific scope

//suppose var a1 is declared in one function 
//console.log is written (accessed) outside the function then we will get error

hi() //this can be done as function is moved above when called before defining
function hi(){
    console.log("Hi")
}

console.log(h1)   //here we cannot access h1 as it is declared as const
const h1= hello(()=>{
console.log("Hello")
})