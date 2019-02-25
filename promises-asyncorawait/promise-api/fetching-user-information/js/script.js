"use strict";


window.onload = function() {

    let names = ['iliakan', 'remy', 'jeresig'];

    let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

    Promise.all(requests)
    .then(responses => {
        // All responses are ready, we can show HTTP status codes
        for (let response of responses) {
            console.log(`${response.url}: ${response.status}`);
        }
        console.log(responses);
        return responses;
    })
    // Map array of responses into array of response.json()
    // to read their content
    .then(responses => Promise.all(responses.map(r => r.json())))
    // ALl JSON answers are parsed: "users" is the array of them
    .then(users => users.forEach(user => console.log(user.name)));


}
