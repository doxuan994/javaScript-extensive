"use strict";


window.onload = function() {

    flyjet.onclick = function() {
        // this.style.width = '400px';
        // this.style.height = '240px';


        let ended = false;


        flyjet.addEventListener('transitionend', function(){
            if (!ended) {
                ended = true;
                alert('Done');
            }
        });


        flyjet.classList.add('growing');
    };

}
