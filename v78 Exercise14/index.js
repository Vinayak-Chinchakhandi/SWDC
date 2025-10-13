function blinkDots(paragraph) {
    const dots = [
        paragraph.querySelector('.d1'),
        paragraph.querySelector('.d2'),
        paragraph.querySelector('.d3')
    ];
    let idx = 0;
    setInterval(() => {
        dots.forEach((dot, i) => dot.style.opacity = (i === idx ? "1" : "0.25"));
        idx = (idx + 1) % 3;
    }, 400);
}

function simulate() {
    document.querySelector('.container').classList.add('hidden');
    for (let i = 1; i <= 5; i++) {
        document.querySelector(`.p${i}`).classList.add('hidden');
    }
    setTimeout(() => {
        document.querySelector('.container').classList.remove('hidden');
    }, 2000);

    setTimeout(() => {
        const p = document.querySelector('.p1');
        p.classList.remove('hidden');
        blinkDots(p);
    }, 3000);

    setTimeout(() => {
        const p = document.querySelector('.p2');
        p.classList.remove('hidden');
        blinkDots(p);
    }, 4000);

    setTimeout(() => {
        const p = document.querySelector('.p3');
        p.classList.remove('hidden');
        blinkDots(p);
    }, 5000);

    setTimeout(() => {
        const p = document.querySelector('.p4');
        p.classList.remove('hidden');
        blinkDots(p);
    }, 6000);

    setTimeout(() => {
        const p = document.querySelector('.p5');
        p.classList.remove('hidden');
        blinkDots(p);
    }, 7000);
}

simulate();



// function randomDelay(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // This animates the three dots in a blinking cycle for a given paragraph element
// function blinkDots(paragraph) {
//     const dots = paragraph.querySelectorAll(".dot");
//     let idx = 0;
//     setInterval(() => {
//         dots.forEach((dot, i) => {
//             dot.classList.toggle("active", i === idx);
//         });
//         idx = (idx + 1) % 3;
//     }, 400);
// }

// async function simulate() {
//     const paragraphs = [
//         document.querySelector(".p1"),
//         document.querySelector(".p2"),
//         document.querySelector(".p3"),
//         document.querySelector(".p4"),
//         document.querySelector(".p5"),
//     ];

//     // hide all paragraphs at start
//     paragraphs.forEach(p => p.classList.add("hidden"));

//     for (let p of paragraphs) {
//         const delay = randomDelay(1000, 7000); // random delay between 1s and 7s
//         await new Promise(resolve => setTimeout(resolve, delay));
//         p.classList.remove("hidden");
//         blinkDots(p);
//     }
// }

// // start the simulation
// simulate();
