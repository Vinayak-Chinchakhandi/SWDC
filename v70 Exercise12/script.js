console.log("Exercise 12")

let box = document.getElementsByClassName("boxes")
console.log(box)

function getcolor() {
    //a + Math.random() *(b-a)                 to generate random number between a to b
    //math.ceil( a + Math.random() *(b-a) )    to convert that number to nearest integer
    let v1 = Math.ceil(0 + Math.random() * 255)
    let v2 = Math.ceil(0 + Math.random() * 255)
    let v3 = Math.ceil(0 + Math.random() * 255)
    return `rgb(${v1},${v2},${v3})`
}
Array.from(box).forEach(e => {
    console.log(e)
    e.style.backgroundColor = getcolor()
    e.style.color = getcolor()
})