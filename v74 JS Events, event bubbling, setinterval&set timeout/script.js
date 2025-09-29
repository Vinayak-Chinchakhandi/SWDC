let button = document.getElementById("btn")

//list of all mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("click", () => {
    document.querySelector(".box").innerHTML =
        "<b>The button is clicked</b>"
})

button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML=
    "<div>The buuton is <b>double clicked</b></div>"
})

button.addEventListener("contextmenu",()=>{
    alert("Button is right clciked")
})

button.addEventListener("keydown",(e)=>{
    console.log(e,e.key)
})