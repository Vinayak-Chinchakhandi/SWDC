console.log("Javascript Arrays")

//in java script araay is collection of different type
//Arrays are  mutable can be changed

let arr = [1, 2, 3, 4, 5];

console.log(arr.length)
console.log(arr[0])
arr[3] = 7567
console.log(arr[3])
console.log(arr, typeof (arr))  // type of array is object

console.log(arr.toString())  // array is converted into comma separated string

console.log(arr.join(" And "))  //instead of comma and is used to join array elements

console.log(arr.pop())  //removes last element in array (5)

arr.push(100)  //insert element at end
arr.push("hi")
console.log(arr)

console.log(arr.shift())  //removes first elelement of aray (1)

arr.unshift("Hello") //insert element at first
console.log(arr)




delete arr[3] // delete element at 3rd position
//delete element but still length is same 
//that position is left empty means that is undefined 
console.log(arr)
console.log(arr[3]) //undefined becauseelement is deleted but place left empty




let a1 = [1, 2, 3]
let a2 = [4, 5, 6]
let a3 = [775, 86, 95, 34, 64, 86]
console.log(a1.concat(a2, a3))// original a1,a2,a3 as it is

console.log(a3.sort())  //sort array

let numbers = [1, 2, 3, 4, 5]
console.log(numbers.splice(1, 3)) // removes [2,3,4] and prints
console.log(numbers) //[1,5]
let n = [1, 4, 3, 56, 78, 3, 6, 8]
console.log(n.splice(1,3,222,333))  // removes [4,3,56] and add 222,333 in same place put prints only removed elements
console.log(n)  //[1, 222, 333, 78, 3, 6, 8]

let b=[1,2,3,4,5]
console.log(b.slice(1,3))  //removes[2,3] but original array is as it is
console.log(b) 

console.log(b.reverse()) //reverse the array
