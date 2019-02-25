"use strict";


window.onload = function() {

    function populate() {
        while (true) {
            let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

            // console.log(document.documentElement.getBoundingClientRect().bottom);
            // console.log("" + document.documentElement.clientHeight);

            if (windowRelativeBottom > document.documentElement.clientHeight + 100) {
                return;
            }
            document.body.insertAdjacentHTML("beforeend", `<p>Date: ${new Date()}</p>`);
        }
    }

    window.addEventListener('scroll', populate);

    populate(); // init document

}
