console.log("Hi hello how are you.")


//===============Selecting Using classes=====================
let boxes = document.getElementsByClassName("box")
console.log(boxes)

// boxes[2].style.backgroundColor = "Red"



//===================Selecting by ID========================
document.getElementById("red").style.backgroundColor = "Red"



//===================query selector=========================
document.querySelector(".box").style.backgroundColor = "Green"
//here box is class name of more items but style is not applied to all it is applied only to first occuring element 
//so only first box is colored.

console.log(document.querySelectorAll(".box"))
//now it will return all boxes that have the class name as Box 
// it is collection of html elements and (nodelist) with class name Box
//so we cannot apply style for html collections

//for that we have to use for loop
document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "Green"
});
// now it will not return html collection it wil return individual elements
//and all boxes are colored




//=======================Selecting by tag name==============
console.log(document.getElementsByTagName("div"))
// now it will return all divs
let a = document.getElementsByTagName("div")


//====================matches===============================
console.log(a[4].matches("#red"))
// it will return true as box 4 id is red


//===================closest=================================
//it will return the nearest element that matches the css
console.log(a[5].closest("#red"))//nul because nether box5 is #red and nor its parent is #red
console.log(a[5].closest(".container"))
//return the main container div as it is the nearest element that matches with classs .container
console.log(a[5].closest("html"))  // it will return the html


//==================contains=================================
console.log(document.querySelector(".container").contains(a[4]))
//returns true as container containes box 4
console.log(document.querySelector(".container").contains(document.querySelector("body")))
//returns false as container do not contain body
console.log(document.querySelector("body").contains(document.querySelector(".container")))
// returns true as body contains container