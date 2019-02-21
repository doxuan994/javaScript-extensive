"use strict";


window.onload = function() {

    let container = document.getElementById('container');

    container.onclick = function(event) {
        if (event.target.className != 'remove-button') return;

        let pane = event.target.closest('.pane');
        // console.log(pane);
        pane.remove();
    };

}
