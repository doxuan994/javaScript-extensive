"use strict";


window.onload = function() {

    let currentDroppable = null;

    ball.onmousedown = function(event) {

        let shiftX = event.clientX - ball.getBoundingClientRect().left;
        let shiftY = event.clientY - ball.getBoundingClientRect().top;

        ball.style.position = 'absolute';
        ball.style.zIndex = 1000;
        document.body.append(ball);

        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
            ball.style.left = pageX - shiftX + 'px';
            ball.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);

            ball.hidden = true;
            // document.elementFromPoint(event.clientX, event.clientY)
            // returns the most nested element on given window-relative
            // coordinates (or null if coordinates are out of the window).
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            ball.hidden = false;

            if (!elemBelow) return;

            let droppableBelow = elemBelow.closest('.droppable');

            // console.log(currentDroppable);
            // console.log(droppableBelow);
            if (currentDroppable != droppableBelow) {
                // console.log(currentDroppable);
                if (currentDroppable) { // null when we were not over a droppable before this event
                    leaveDroppable(currentDroppable);
                    // console.log("I am here");
                }
                currentDroppable = droppableBelow;
                if (currentDroppable) { // null if we're not coming over a droppable now
                                        // (maybe just left the droppable)
                    enterDroppable(currentDroppable);
                    // console.log("I am here, too");
                }
            }
        }

        document.addEventListener('mousemove', onMouseMove);

        ball.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            ball.onmouseup = null;
        };

    };

    function enterDroppable(elem) {
        elem.style.background = 'pink';
    }

    function leaveDroppable(elem) {
        elem.style.background = '';
    }

    ball.ondragstart = function() {
        return false;
    };

}
