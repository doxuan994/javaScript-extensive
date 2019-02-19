// let join = {
//     name: "John",
//     sayHi: function() {
//         console.log("Hi buddy!");
//     }
// };
//
// join.sayHi();

// let str = "Hello";
// console.log(str.toUpperCase());

// let n = 1.23456;
// console.log(n.toFixed(2));

// let str = "Hello";
// str.test = 5;
// console.log(str.test); // undefined



/* NUMBERS */
// let billion = 1e9;
// console.log(billion);
//
// let ms = 1e-6;
// console.log(ms);
//
// console.log(0xff);
// console.log(0xFF);
//
// let num = 255;
//
// console.log(num.toString(16));
// console.log(num.toString(2));
//
// console.log(Math.floor(3.1));
// console.log(Math.ceil(3.1));
// console.log(Math.round(3.1));

// let num = 1.23456;
//
// console.log(Math.floor(num * 100) / 100);



// let num = 12.34;
//
// console.log(num.toFixed(1));



// let num = 12.36;
//
// console.log(num.toFixed(1));


// let sum = 0.1 + 0.2;
//
// console.log(typeof sum.toFixed(2));
// console.log(typeof +sum.toFixed(2));
//
// console.log(+sum.toFixed(2));

// isNaN(value) converts its argument to a number and then
// tests it for being NaN

// console.log(isNaN(NaN));
// console.log(isNaN("str"));
//
//
// console.log(isFinite("10"));
// console.log(isFinite("str"));
// console.log(isFinite(Infinity));


// console.log(parseInt('100px'));
// console.log(parseInt('12.5em'));
// console.log(parseInt('12.2'));
// console.log(parseInt('12.3.4'));



// console.log(parseInt('0xff', 16));

// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.max(3, 5, -10, 0, 1));
// console.log(Math.min(1, 2));

// console.log(Math.pow(2, 10));

// let a = +prompt("The first number?", "");
// let b = +prompt("The second number?", "");
//
// console.log(typeof a);
// console.log(typeof b);
//
// console.log(a + b);


// console.log(6.35.toFixed(1));
// function readNumber() {
//     let num;
//
//     do {
//         num = prompt("Enter a number please?", 0);
//     } while (!isFinite(num));
//
//     if (num === null || num === '') {
//         return null;
//     }
//
//     return +num;
// }
//
// console.log(`Read: ${readNumber()}`);


// An occasinal infinite loop.
// let i = 0;
// while (i != 10) {
//     i += 0.2;
// }
// Because i will never exactly == 10.

// function random(min, max) {
//     return min + Math.random() * (max - min);
// }
//
// console.log(random(1, 5));

// function randomInteger(min, max) {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }
//
// console.log(randomInteger(1, 3));


/* STRINGS */
// let str = "stringfy";
// console.log(str.slice(0, 5));
// console.log(str.slice(0, 1));
//
// console.log(str.slice(2));


// console.log(str.substring(2, 6));
// console.log(str.substring(6, 2));
// console.log(str.slice(2, 6));
// console.log(str.slice(6, 2));


// let str = "stringfy";
//
// console.log(str.substr(2, 4));
// console.log(str.substr(-4, 2)); // count from the second

// function ucFirst(str) {
//     if (!str) {
//         return str;
//     }
//     return str.slice(0,1).toUpperCase() + str.substr(1, str.length);
// }
// console.log(ucFirst("john"));

// function ucFirst(str) {
//     if (!str) {
//         return str;
//     }
//     return str[0].toUpperCase() + str.slice(1);
// }
// console.log(ucFirst("john"));

// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();
//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }
//
// console.log(checkSpam('XXX'));


// Truncate the text.
// function truncate(str, maxlength) {
//     return (str.length > maxlength) ? str.slice(0, maxlength - 1) + "..." : str;
// }
// console.log(truncate("Helloo", 5));

// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }
// console.log(extractCurrencyValue("$120"));

/* ARRAYS */

// let fruits = ["Apples", "Pear", "Orange"];
//
// // Push a new value into the "copy"
//
// let shoppingCart = fruits;
//
// shoppingCart.push("Banana");
//
// console.log(fruits.length); // 4
//
// console.log(fruits);
// console.log(shoppingCart);

// Arrays are objects.
// Both are the references to the same array.

// Array operations.
// styles = ["Jazz", "Blues"];
// console.log(styles);
// styles.push("Rock-n-Roll");
// console.log(styles);
// // console.log(Math.floor(styles.length / 2));
// if (styles.length % 2 > 0) {
//     styles[Math.floor(styles.length / 2)] = "Classics";
// }
// console.log(styles);
//
// styles.shift();
// console.log(styles);
// styles.unshift("Rap", "Reggae");
// console.log(styles);

// Calling in an array context.
// let arr = ["a", "b"];
//
// arr.push(function() {
//     console.log(this);
// });
//
// arr[2](); // "a", "b", function

// Sum input numbers.
// function sumInput() {
//
//     let numbers = [];
//
//     while (true) {
//         let value = prompt("A number please?", 0);
//
//         // Should we cancel?
//         if (value === "" || value === null || !isFinite(value)) {
//             break;
//         }
//
//         numbers.push(+value);
//     }
//
//     let sum = 0;
//     for (let number of numbers) {
//         sum += number;
//     }
//     return sum;
// }
//
// console.log(sumInput());

// A maximal subarray.

// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;
//
//     for(let item of arr) {
//         partialSum += item;
//         maxSum = Math.max(maxSum, partialSum);
//         if (partialSum < 0) {
//             partialSum = 0;
//         }
//     }
//     return maxSum;
// }
//
// console.log(getMaxSubSum([-1, 2, 3, -9]));
// console.log(getMaxSubSum([2, -1, 2, 3, -9]));
// console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
// console.log(getMaxSubSum([-2, -1, 1, 2]));
// console.log(getMaxSubSum([100, -9, 2, -3, 5]));
// console.log(getMaxSubSum([1, 2, 3]));

// function camelize(str) {
//     return str
//     .split("-")
//     .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join('');
// }
// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

"use strict";

// Filter range.

// function filterRange(arr, a, b) {
//     return arr.filter(item => (a <= item && item <= b));
// }
//
// let arr = [5, 3, 8, 1];
//
// console.log(filterRange(arr, 1, 4)); // 3, 1

// Filter range "in place".
// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1);
//         }
//     }
// }
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// console.log(arr); // [3, 1]

// Sort in the reverse order.
// let arr = [5, 2, 1, -10, 8];
//
// arr.sort((a, b) => b - a);
//
// console.log(arr);

// Copy and sort array.

// let arr = ["HTML", "JavaScript", "CSS"];
//
// function copySorted(arr) {
//
//     // slice() to make a copy amd run the sort to sort on it.
//     return arr.slice().sort();
//
// }
//
// let sorted = copySorted(arr);
//
// console.log(sorted);
// console.log(arr);


// Create an extendable calculator.

// function Calculator() {
//
//     let methods = {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b
//     };
//
//     this.calculate = function(str) {
//
//         let split = str.split(' '),
//         a = +split[0],
//         op = split[1],
//         b = +split[2]
//
//         if (!methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }
//
//         return methods[op](a, b);
//     }
//
//     this.addMethod = function(name, func) {
//         methods[name] = func;
//     };
// }


// Map to names.
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
//
// let users = [john, pete, mary];
//
// let names = users.map(item => item.name);
//
// console.log(names);


// Map to objects.
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
//
// let users = [john, pete, mary];
//
// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// }));
//
//
// console.log(usersMapped[0].id);
// console.log(usersMapped[0].fullName);

// Sort objects.
// function sortByName(users) {
//     users.sort((a, b) => a.age > b.age ? 1 : -1);
// }
//
//
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
//
// let users = [john, pete, mary];
//
// sortByName(users);
//
// console.log(users[0].name);
// console.log(users[2].name);

// Shuffle an array.
// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
// }
//
// let arr = [1, 2, 3];
//
// shuffle(arr);
// console.log(arr);

// Get average age.
// function getAverageAge(users) {
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }
//
//
//
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };
//
// let arr = [ john, pete, mary ];
//
// console.log(getAverageAge(arr)); // 28


// Filter unique array members.

// function unique(arr) {
//     let results = [];
//     for (let str of arr) {
//         if (!results.includes(str)) {
//             results.push(str)
//         }
//     }
//
//     return results;
// }
//
// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
//
// console.log(unique(strings));// Hare, Krishna, :-O

/* MAP, SET, WEAKMAP, WEAKSET */

// Filter unique array members.


// function unique(arr) {
//     return Array.from(new Set(arr));
// }
//
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
//
// console.log(unique(values)); // Hare, Krishna, :-O


// Filter anagrams.
// function aclean(arr) {
//     let map = new Map();
//
//     for (let word of arr) {
//         // Split the word by letters, sort them and join back.
//
//         let sorted = word.toLowerCase().split('').sort().join('');
//
//
//         // Set keys - values for map but also remove duplicates.
//         // console.log(sorted);
//         // console.log(word);
//         // Only that last anagrams used to store final data.
//         map.set(sorted, word);
//         // console.log(map);
//     }
//
//     return Array.from(map.values());
// }
//
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// console.log(aclean(arr));
//
// let map = new Map();
// map.set("name", "John");
//
// console.log(map);
//
// let keys = Array.from(map.keys());
//
// keys.push("more");
//
// console.log(keys);

// Store "unread" flags.

// let messages = [
//     { text: "Hello", from: "John" },
//     { text: "How goes?", from: "John" },
//     { text: "See you soon", from: "Alice" }
// ];
//
// let readMessages = new WeakSet();
//
// readMessages.add(messages[0]);
// readMessages.add(messages[1]);
// readMessages.add(messages[0]);
//
// console.log("Read message 0: " + readMessages.has(messages[0]));
//
// messages.shift();




// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
// ];
//
// let readMap = new WeakMap();
//
// readMap.set(messages[0], new Date(2017, 1, 1));
//
//
// console.log(readMap);


// function sumSalaries(salaries) {
//     let sum = 0;
//
//     for (let salary of Object.values(salaries)) {
//         sum += salary;
//     }
//     return sum;
// }
//
//
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
//
//
// console.log(sumSalaries(salaries));

//
// let user = {
//     name: 'John',
//     age: 30
// };
//
//
// function count(obj) {
//     return Object.keys(obj).length;
// }
//
// console.log(count(user));

// Destructuring assignment.

// let user = {
//     name: "John",
//     years: 30
// };
//
// let {
//     name,
//     years: age,
//     isAdmin = false
// } = user;
//
// console.log(name);
// console.log(age);
// console.log(isAdmin);


// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
//
//
// function topSalary(salaries) {
//
//     let max = 0;
//     let maxName = null;
//
//     for(const [name, salary] of Object.entries(salaries)) {
//         if (max < salary) {
//             max = salary;
//             maxName = name;
//         }
//     }
//
//     return maxName;
// }

// let d = new Date(2012, 1, 20, 3, 12);
//
// alert(d);

// Show a weekday.
// function getWeekDay(date) {
//     let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
//
//     // getDay(date) return index of date in a week
//     return days[date.getDay()];
// }
//
// let date = new Date(2014, 0, 3); // 3 Jan 2014
// console.log(getWeekDay(date));

// "use strict";

// function getLocalDay(date) {
//
//     let day = date.getDay();
//     if (day == 0) {
//         day = 7;
//     }
//     return day;
// }
//
//
// let date = new Date(2012, 0, 1);
// console.log(getLocalDay(date));
//
//
// let date2 = new Date(2012, 0, 3);
// console.log(getLocalDay(date2));

// function getDateAgo(date, days) {
//     // console.log(date.getDate() - days);
//     let dateCopy = new Date(date);
//
//     dateCopy.setDate(date.getDate() - days);
//     return dateCopy.getDate();
// }
//
// let date = new Date(2015, 0, 2);
//
// // getDateAgo(date, 3);
//
// console.log(getDateAgo(date, 1));
// console.log(getDateAgo(date, 2));
// console.log(getDateAgo(date, 365));

// Last day of month?
// function getLastDayOfMonth(year, month) {
//     // 0 in day means the last day of the previous month.
//     let date = new Date(year, month + 1, 0);
//     return date.getDate();
// }
//
// console.log(getLastDayOfMonth(2012, 0));
// console.log(getLastDayOfMonth(2012, 1));
// console.log(getLastDayOfMonth(2013, 1));

// How many seconds has passed today?
// function getSecondsToday() {
//     let now = new Date();
//
//     console.log(now);
//
//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//
//     console.log(today);
//
//     let diff = now - today;
//
//     return Math.round(diff / 1000);
// }
//
// console.log(getSecondsToday());


// function getSecondsToday() {
//     let d = new Date();
//     return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
// };
// console.log(getSecondsToday());

// How many seconds till tomorrow?
// function getSecondsToTomorrow() {
//     let now = new Date();
//
//     let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
//
//     let diff = tomorrow - now; // ms
//     return Math.round(diff / 1000);
// }
//
// console.log(getSecondsToTomorrow());

// function formatDate(date) {
//     let diff = new Date() - date;
//
//     if (diff < 1000) {
//         return 'right now';
//     }
//
//     let sec = Math.floor(diff / 1000);
//
//     if (sec < 60) {
//         return sec + ' sec. ago';
//     }
//
//     let min = Math.floor(diff / 1000);
//
//     if (min < 60) {
//         return min + ' min. ago';
//     }
//
//     let d = date;
//     d = [
//         '0' + d.getDate(),
//         '0' + (d.getMonth() + 1),
//         '' + d.getFullYear(),
//         '0' + d.getHours(),
//         '0' + d.getMinutes()
//     ].map(component => component.slice(-2));
//     return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
// }
//
//
// alert( formatDate(new Date(new Date - 1)) ); // "right now"
//
// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"
//
// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"
//
// // yesterday's date like 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );

/*******************************************************************************

JSON

*******************************************************************************/

// JSON.stringfy to convert objects to JSON.

// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
// };
//
// let json = JSON.stringify(student);
//
// // json string is a called JSON-encoded object.
//
// console.log(typeof json); // string
//
// console.log(json);


// let user = {
//     name: "John Smith",
//     age: 35
// };
//
// let json = JSON.stringify(user);
//
// console.log(json);
//
//
// let dJson = JSON.parse(json);
//
// console.log(dJson);

// Exclude backreferences.

// function replacer(key, value) {
//
// }


let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

// console.log(room);
// console.log(meetup);


console.log(JSON.stringify(meetup, function(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));
























//
