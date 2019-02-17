// a wrapping function.
// let user = {
//     firstName: "John",
//     sayHi() {
//         console.log(`Hello, ${this.firstName}!`);
//     }
// }
// setTimeout(function() {
//     user.sayHi();
// }, 1000);
//
// // Short writing.
// setTimeout(() => user.sayHi(), 1000);

// bind
// let user = {
//     firstName: "John",
//     sayHi() {
//         console.log(`Hello, ${this.firstName}!`);
//     }
// }
//
// let sayHi = user.sayHi.bind(user);
// sayHi();
// setTimeout(sayHi, 1000);

"use strict";
// Bound function as a method.
// function f() {
//     console.log(this); // null
// }
//
// let user = {
//     g: f.bind(null)
// };
//
// user.g();


// function f() {
//     console.log(this.name);
// }
//
// f = f.bind( {name: "John"} ).bind( {name: "Ann"} );
//
// f(); // John

// Function property after bind.
// function sayHi() {
//     console.log(this.name);
// }
//
// sayHi.test = 5;
//
// let bound = sayHi.bind({
//     name: "John"
// });
//
// console.log( bound.test ); // undefined
// // The result of bind is another object.
// // It does not have the test property.

// Ask losing this.
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") {
        ok();
    } else {
        fail();
    }
}
let user = {
    name: "John",

    loginOk() {
        console.log(`${this.name} logged in`);
    },

    loginFail() {
        console.log(`${this.name} failed to log in`);
    },
};


askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
