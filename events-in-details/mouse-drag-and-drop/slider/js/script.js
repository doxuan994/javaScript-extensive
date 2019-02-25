"use strict";


window.onload = function() {

    let slider = document.getElementById('slider');
    let thumb = slider.querySelector('.thumb');

    thumb.onmousedown = function(event) {
        event.preventDefault(); // prevent selection start (brower action)

        let shiftX = event.clientX - thumb.getBoundingClientRect().left;
        // shiftY not needed, the thumb moves only horizontally

        // console.log(event.clientX);
        // console.log(thumb.getBoundingClientRect().left);


        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        // Define the action when moving the thumb left or right.
        function onMouseMove(event) {
            let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

            // The pointer is out of the slider => lock the thumb within the
            // bounaries.

            // Move too much to the left and out of the slider
            if (newLeft < 0) {
                newLeft = 0;
            }

            // Move too much to the right and out of the slider
            let rightEdge = slider.offsetWidth - thumb.offsetWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }

            thumb.style.left = newLeft + 'px';
        }

        function onMouseUp() {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        }

    };



    thumb.ondragstart = function() {
        return false;
    };

}
