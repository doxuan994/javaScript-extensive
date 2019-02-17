// function makeCounter() {
//     let count = 0;
//
//     return function() {
//         return count++;
//     };
// }
// let counter = makeCounter();
// let counter2 = makeCounter();
//
// console.log( counter() );
// console.log( counter() );
//
//
// console.log( counter2() );
// console.log( counter2() );

// Counter object.
// function Counter() {
//     let count = 0;
//
//     this.up = function() {
//         return ++count;
//     };
//
//     this.down = function() {
//         return --count;
//     };
// }
//
//
// let counter = new Counter();
//
// console.log(counter.up()); // 1
// console.log(counter.up()); // 2
// console.log(counter.down()); // 1


"use strict";

// let phrase = "Hello";
//
// if (true) {
//     let user = "John";
//
//     function sayHi() {
//         console.log( `${phrase}, ${user}` );
//     }
// }
// sayHi();
// This result is an error.
// The function sayHi is declared inside the if, so it only lives inside it.
// There is no sayHi outside.

// function sum(a) {
//     return function (b) {
//         return a + b;
//     };
// }
//
// console.log(sum(3)(4));
// console.log(sum(3)(-5));

// Filter inBetween.
// function inBetween(a, b) {
//     return function(x) {
//         return x >= a && x <= b;
//     };
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log( arr.filter(inBetween(3,6)) );
//
// // Filter inArray.
// function inArray(arr) {
//     return function(x) {
//         return arr.includes(x);
//     }
// }
// console.log( arr.filter(inArray([1, 2, 10])) );

// Sort by field.
// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" },
// ];

// The usual way.
// Sort by name.
// users.sort((a, b) => a.name > b.name ? 1 : -1);
// console.log(users);
//
// // Sort by age.
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// console.log(users);

// function byField(field) {
//     return (a, b) => a[field] > b[field] ? 1 : -1;
// }
//
// users.sort(byField('age'));
// console.log(users);

// function makeArmy() {
//     let shooters = [];
//
//     for (let i = 0; i < 10; i++) {
//         let shooter = function() {
//             console.log(i);
//         };
//         shooters.push(shooter);
//     }
//     return shooters;
// }
//
// let army = makeArmy();
//
// army[0]();
// army[5]();
