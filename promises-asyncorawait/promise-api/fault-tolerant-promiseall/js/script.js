"use strict";


// window.onload = function() {
//
//     let urls = [
//         'https://api.github.com/users/iliakan',
//         'https://api.github.com/users/remy',
//         'https://api.github.com/users/jeresig'
//     ];
//
//
//     Promise.all(urls.map(url => fetch(url)))
//     // For each response show its status
//     .then(responses => {
//         for (let response of responses) {
//             console.log(`${response.url}: ${response.status}`);
//         }
//     });
//
// }


// window.onload = function() {
//
//     let urls = [
//         'https://api.github.com/users/iliakan',
//         'https://api.github.com/users/remy',
//         'http://no-such-url'
//     ];
//
//     Promise.all(
//         urls.map(url => fetch(url).catch(err => err))
//     )
//     .then(responses => {
//         for (let response of responses) {
//             console.log(`${response.url}: ${response.status}`);
//         }
//     });
//
//
// }
