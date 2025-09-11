let arr=[1,2,3,4,5,6]
console.log(arr)

// let newarr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }
// console.log(newarr)


//===============using map===========

let newarr = arr.map((e)=>{
    return e**2
})
console.log(newarr)

//================filter==============

const greater = (e)=>{
    if(e>3){
        return true;
    }
    return false
}
console.log(arr.filter(greater))// returns elements greater than 3

//=================reduce==============

const add = (a,b)=>{
    return a+b
}
console.log(arr.reduce(add))// adds all elements of array

//=================from================

let a= Array.from("Hello");  //used to create array from object
console.log(a) //[ 'H', 'e', 'l', 'l', 'o' ]