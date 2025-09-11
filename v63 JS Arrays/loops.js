let a = [1, 8, 3, 7, 6]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}

// 1
// 8
// 3
// 7
// 6

//=========================== for each ==================================

a.forEach((value, index, arr) => {
    console.log(value, index, arr)
});

// 1 0 [ 1, 8, 3, 7, 6 ]
// 8 1 [ 1, 8, 3, 7, 6 ]
// 3 2 [ 1, 8, 3, 7, 6 ]
// 7 3 [ 1, 8, 3, 7, 6 ]
// 6 4 [ 1, 8, 3, 7, 6 ]

//=========================== for in ===================================

let obj = {
    a1: 1,
    b: 2,
    c: 3
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
    }
}

// 1
// 2
// 3

//============================ for of ==================================

for (const i of a) {
    console.log(i)
}

// 1
// 8
// 3
// 7
// 6