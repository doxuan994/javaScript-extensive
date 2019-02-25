"use strict";


window.onload = function() {

    boat.onclick = function() {

        this.onclick = null; // only the first click should start the animation


        let times = 1;

        function go() {

            if (times % 2) {
                boat.classList.remove('back');
                boat.style.marginLeft = 100 * times + 200 + 'px';
            } else {
                boat.classList.add('back');
                boat.style.marginLeft = 100 * times - 200 + 'px';
            }

        }


        go();


        boat.addEventListener('transitionend', function() {
            times++;
            go();
        });

    }


}
