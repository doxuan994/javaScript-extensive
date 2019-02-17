"use strict";
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//
//
//     slowList() {
//         this.students.forEach(function(student) {
//             console.log(group.title + ": " +student);
//         });
//     }
// };

// group.slowList();


// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//
//
//     slowList() {
//         this.students.forEach( student => console.log(this.title + ": " + student));
//     }
// };
//
// group.slowList();

function defer(f, ms) {
    return function() {
        setTimeout(() => f.apply(this, arguments), ms)
    };
}

function sayHi(who) {
    console.log('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John");
