"use strict";


window.onload = function() {

    // stripe.onclick = function() {
    //     stripe.classList.add('animate');
    // };

    // With delay

    stripe.onclick = function() {
        let sec = new Date().getSeconds() % 10;
        // for instance, -3s here starts the animation from the 3rd second
        stripe.style.transitionDelay = '-' + sec + 's';
        stripe.classList.add('animate');
    };
}
