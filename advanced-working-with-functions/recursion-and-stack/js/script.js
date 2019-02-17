// a function calculates the sum of numbers 1 + 2 + ... + n
// Using a for loop
// function sumTo(n) {
//     sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     console.log(sum);
// }
// sumTo(3); // 6

// Using a recursion, cause sumTo(n) = n + sumTo(n - 1) for n > 1
// function sumTo(n) {
//     if (n == 1) {
//         return 1;
//     } else {
//         return n + sumTo(n - 1);
//     }
// }
// console.log(sumTo(3)); // 6
// console.log(sumTo(4)); // 10
// function sumTo(n) {
//     return n * (n + 1) / 2;
// }
// console.log(sumTo(3)); // 6

// Calculate factorial.
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
// }
// console.log(factorial(5));

// Calculate Fibonacci numbers.
// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
// console.log(fib(3)); // 2


let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};


// Output a single-linked list.
// Loop-based solution
// function printlist(list) {
//     let tmp = list;
//
//     while (tmp) {
//         console.log(tmp.value);
//         tmp = tmp.next;
//     }
// }
//
// printlist(list);

// Recursion solution
// function printlist(list) {
//     console.log(list.value);
//     if (list.next) {
//         printlist(list.next);
//     }
// }
// printlist(list);

// Output a single-linked list in the reverse order.
// Using a Loop
// function printReserveList(list) {
//     let array = [];
//     let tmp = list;
//     while (tmp) {
//         array.push(tmp.value);
//         tmp = tmp.next;
//     }
//
//     for (let i = array.length - 1; i >= 0; i--) {
//         console.log(array[i]);
//     }
// }
// printReserveList(list)

// Using a recursion.
// function printReserveList(list) {
//     if (list.next) {
//         printReserveList(list.next);
//     }
//     console.log(list.value);
// }
// printReserveList(list);
