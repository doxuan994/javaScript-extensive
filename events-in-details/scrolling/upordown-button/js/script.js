"use strict";


window.onload = function() {

    arrowTop.onclick = function() {
        window.scrollTo(pageXOffset, 0);
        // after scrollTo, there will be a "scroll" event, so the arrow will hide automatically
    };

    window.addEventListener('scroll', function() {
        // console.log(document.documentElement.clientHeight);
        // Hidden the arrow if not scroll down enough.
        // console.log(pageYOffset);
        arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
    });

}
