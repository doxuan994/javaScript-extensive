// function spy(func) {
//     function wrapper(...args) {
//         wrapper.calls.push(args);
//         return func.apply(this, arguments);
//     }
//
//     wrapper.calls = [];
//
//     return wrapper;
// }
//
//
// // Delaying decorator.
// function f(x) {
//     console.log(x);
// }
//
// function delay(f, ms) {
//     return function() {
//         setTimeout(() => f.apply(this, arguments), ms);
//     };
// }
//
// // create wrapper
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);


//
// f1000("test");
// f1500("test");

// Debounce decorator.
// function debounce(f, ms) {
//
//     let isCooldown = false;
//
//     return function() {
//         if (isCooldown) return;
//
//         f.apply(this, arguments);
//
//         isCooldown = true;
//
//         setTimeout(() => isCooldown = false, ms);
//     };
//
// }
//
//
// let f = debounce(console.log, 1000);
//
// f(1);
// f(2);
//
// setTimeout( () => f(3), 100);
// setTimeout( () => f(4), 1100);
// setTimeout( () => f(5), 1500);

// Throttle decorator.
function f(a) {
    console.log(a)
};

// f1000 passes calls to f at maximum once per 1000 ms
let f1000 = throttle(f, 1000);

f1000(1); // shows 1
f1000(2); // (throttling, 1000ms not out yet)
f1000(3); // (throttling, 1000ms not out yet)

// when 1000 ms time out...
// ...outputs 3, intermediate value 2 was ignored


function throttle(func, ms) {

    let isThrottled = false,
    savedArgs,
    savedThis;

    function wrapper() {

        if (isThrottled) { // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments); // (1)

        isThrottled = true;

        setTimeout(function() {
            isThrottled = false; // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}
