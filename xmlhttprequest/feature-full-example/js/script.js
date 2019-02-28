"use strict";

function load(url) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.timeout = 1000;
    xhr.send();

    xhr.onload = function() {
        console.log(`Loaded: ${this.status} ${this.responseText}`);
    };

    xhr.onerror = () => console.log('Error');

    xhr.ontimeout = () => console.log('Timeout!');
}
