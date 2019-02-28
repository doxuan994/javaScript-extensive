"use strict";


window.onload = function() {

    let urls = [
        'https://api.github.com/users/iliakan',
        'https://api.github.com/users/remy',
        'http://no-such-url'
    ];

    // make fetch requests
    Promise.all(
        urls.map(url => fetch(url).catch(err => err))
    )
    // map each response to response.json()
    .then(responses => Promise.all(
        responses.map(r => r instanceof Error ? r : r.json().catch(err => err))
    ))
    // show name of each user
    .then(results => {  // (*)
        for (let result of results) {
            console.log(result.name);
        }
    });

}
