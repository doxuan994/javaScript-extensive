// Output every second.
// function printNumbers(from, to) {
//     let current = from;
//
//     let timerId = setInterval(function() {
//         console.log(current);
//         if (current == to) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 1000);
// }
//
// printNumbers(5, 10);

// Using recursive setTimeout.
// function printNumbers(from, to) {
//     let current = from;
//
//     setTimeout(function go() {
//         console.log(current);
//
//         if (current < to) {
//             setTimeout(go, 1000);
//         }
//         current++;
//     }, 100);
// }
//
// printNumbers(5, 10);

// Rewrite setTimeout with setInterval.
// let i = 0;
//
// let start = Date.now();
//
// function count() {
//
//     if (i == 1000000000) {
//         console.log("Done in " + (Date.now() - start) + "ms");
//     } else {
//         setTimeout(count, 0);
//     }
//
//     // a piece of heavy job
//     for (let j = 0; j < 1000000; j++) {
//         i++;
//     }
//
// }
//
// count();


// let i = 0;
//
// let start = Date.now();
//
// let timer = setInterval(count, 0);
//
// function count() {
//     for (let j = 0; j < 1000000; j++) {
//         i++;
//     }
//
//     if (i == 1000000000) {
//         console.log("Done in " + (Date.now() - start) + "ms");
//         clearInterval(timer);
//     }
// }
// count();

let i = 0;

setTimeout(() => console.log(i), 100); // 10000000

for (let j = 0; i < 10000000; j++) {
    i++;
}
