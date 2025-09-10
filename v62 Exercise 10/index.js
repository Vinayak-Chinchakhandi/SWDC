// Crazy
// Amazing
// Fire 

// Engine
// Foods
// Garments

// Bros
// Limited
// Hub

let rand = Math.random()
let first,second,third;

//================FIRST============
if(rand<0.33){
     first = "Crazy"
}
else if(rand>=0.33 && rand<0.66){
    first = "Amazing"
}
else{
    first = "Fire"
}
//==================SECOND================
if(rand<0.33){
     second = "Engine"
}
else if(rand>=0.33 && rand<0.66){
    second = "Foods"
}
else{
    second = "Garments"
}
//=================THIRD==================
if(rand<0.33){
     third = "Bros"
}
else if(rand>=0.33 && rand<0.66){
    third = "Limited"
}
else{
    third = "Hub"
}
console.log(`Your Business Name is: ${first} ${second} ${third}`)