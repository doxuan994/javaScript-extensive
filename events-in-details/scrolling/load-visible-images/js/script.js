"use strict";


window.onload = function() {

    function isVisible(elem) {
        let coords = elem.getBoundingClientRect();

        let windowHeight = document.documentElement.clientHeight;

        // Top elem edge is visible OR bottom elem edge is visible.
        let topVisible = coords.top > 0 && coords.top < windowHeight;
        let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;


        return topVisible || bottomVisible;
    }

    function showVisible() {
        for (let img of document.querySelectorAll('img')) {
            let realSrc = img.dataset.src;
            if (!realSrc) continue;

            if (isVisible(img)) {
                // disable caching
                // this line should be removed in production code
                // realSrc += '?nocache=' + Math.random();

                img.src = realSrc;

                img.dataset.src = '';
            }
        }
    }

    window.addEventListener('scroll', showVisible);
    showVisible();


}
