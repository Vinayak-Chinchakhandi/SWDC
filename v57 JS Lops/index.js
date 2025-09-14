console.log("Javascript loops");

console.log("Five types of loops in js");

// for loop
// for in loop
// foor of loop
// while loop 
// do while loop

//===============for loop ===============
let a=1;
for (let i = 0; i < 100; i++) {
    console.log(a+i);
}


//===========for in loop==============
let obj = {
    name: "Vinayak",
    role: "Programmer"
}

for (const key in obj) {
    const element = obj[key];
    console.log(element);  //prints only elements  
}

for(const key in obj){
    console.log(key);  //prints only keys
}

for(const key in obj){
    const element = obj[key];
    console.log(key,element);  //prints both key and element
}

//===============for of loop==================
for(const c of "Vinayak"){//used to iterate over string or array
    console.log(c);
}

//========while loop ================
let i=0;
while (i<6) {
    console.log(i++);
}

//==============do while loop=================
let j=10;
do {
    console.log(j);
    j++;
} while (j<6);