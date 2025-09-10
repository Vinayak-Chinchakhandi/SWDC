console.log("Javascript Strings")

//STRINGS ARE IMMMUTABLE CANNOT BE CHANGED

let a = "Hello";

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

console.log(a.length)

let b = "Akash"
let c = "Arun"

console.log("His name is " + b + " And his friend name is " + c)
//=================using template literals=================
console.log(`His name is ${b} And his friend name is ${c}`);

//ESCAPE SEQUENCE CHARACTERS
// \n  new line
// \t  tab 
// \r  carriage return

let d = "Ashok"

console.log(d.toUpperCase())    //UPPER CASE
console.log(d.toLowerCase())    //LOWER CASE
console.log(d.length)
console.log(d.slice(1,4))       // 1 to 3 => sho
console.log(d.slice(1))         // from 1 till end  => shok
console.log(d.replace("sh", "l"))   //Alok
//while replacing more than one occurances are there then first one will be replaced
console.log(a.concat(b, c, d))   //concatenate all strings
console.log(d.charAt(2))         //Return character at second position that is "h"
console.log(d.indexOf("sh"))    //Return first index of sh here 1  
//if not present then return -1
console.log(d.startsWith("As"))  //true
console.log(d.startsWith("An"))  //false
console.log(d.endsWith("k"))     //true


let str = "  Hi   "
console.log(str.trim())  //Remove white spaces