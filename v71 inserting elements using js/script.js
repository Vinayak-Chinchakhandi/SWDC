console.log(document.querySelector(".box").innerHTML) //return innerhtml of box

console.log(document.querySelector(".container").innerHTML)

console.log(document.querySelector(".box").innerText)//returns inner text of html element

console.log(document.querySelector(".container").outerHTML)//returns container along with its elements

console.log(document.querySelector(".container").tagName)//returns tag name of container

console.log(document.querySelector(".container").nodeName)//returns nodename of container

//tag name is applied only for element
//nodename is applied for all nodes like elements,text,coment

console.log(document.querySelector(".container").textContent)//returns text inside the element (text-all tags)

console.log(document.querySelector(".container").hidden)//false as conatainer is not hidden

// console.log(document.querySelector(".container").hidden=true)//conatainer is now hidden

console.log(document.querySelector(".box").innerHTML="inner html element data of box is changed using js")//innerhtml of first box is changed

console.log(document.querySelector(".box").hasAttribute("style"))//false as box donot have style

console.log(document.querySelector(".container").hasAttribute("style"))//true as container have style

console.log(document.querySelector(".container").getAttribute("style"))//return style attribute of container

console.log(document.querySelector(".container").setAttribute("style", "display: inline"))//dispaly set to inline 

console.log(document.querySelector(".box").attributes)//returns all attributes of box

console.log(document.querySelector(".container").removeAttribute("style"))//style removed from container

console.log(document.querySelector(".box").dataset)//return data attribute set for box


//================================ELEMENT INSERTION=============================================


let div = document.createElement("div")
div.innerHTML="this is a new div inserted using <b>JAVASCRIPT</b>"
div.setAttribute("class","created")
div.id="inserterdbox"
// // document.querySelector(".container").append(div)//if we use append then element is inserted at the end of container
// // document.querySelector(".container").prepend(div)//if we use prepend then element is inserted at the begining of container
// // document.querySelector(".container").before(div)//if we use before then element is inserted before container
document.querySelector(".container").after(div)//if we use before then element is inserted after container
// document.querySelector(".container").replaceWith(div)//if we use replacewith then element is rerplaced inplace of container


let cont= document.querySelector(".container")
cont.insertAdjacentHTML('beforebegin','<P>New para</p>')
//beforebegin means insert html before the element
//afterbegin means insert html at the immediate start of element
//beforeend means insert html just before the end
//afterend means insert html ater the end of element

// insertAdjacentHTML used to insert HTML 
// insertAdjacentText used to insert text 
// insertAdjacentElement used to insert element

document.querySelector(".box").remove()//remove first box

let a=document.querySelector(".container").classList//returns classlist means all class name of container
console.log(a)

let a1=document.querySelector(".container").className//returns all classes name of container
console.log(a1)

document.querySelector(".container").classList.add("hi")//new class hi added
document.querySelector(".container").classList.remove("hi")//class hi removed

document.querySelector(".container").classList.toggle("red")//remove class red
//toggle means on and off if class present then remove if not present then add