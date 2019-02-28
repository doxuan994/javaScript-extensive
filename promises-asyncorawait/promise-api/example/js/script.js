"use strict";


// window.onload = function() {
//
//     Promise.all([
//         new Promise((resolve, reject) => {
//             setTimeout(() => resolve(1), 1000)
//         }),
//         2,
//         3
//     ]).then(console.log);
//
// }


// Promise.race
window.onload = function() {
    Promise.race([
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
    ]).then(console.log);
}
