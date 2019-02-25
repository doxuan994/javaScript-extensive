"use strict";


window.onload = function() {

    ball.onmousedown = function(event) {

        // console.log(event.clientX);
        // console.log(event.clientY);
        // console.log(ball.getBoundingClientRect().left);
        // console.log(ball.getBoundingClientRect().top);


        // Get the distance from the left-upper edge of the ball
        // to the visitor presses.
        // (Used to remember the distance from the cursor
        // to the left-upper corner of the ball in variables.)
        let shiftX = event.clientX - ball.getBoundingClientRect().left;
        let shiftY = event.clientY - ball.getBoundingClientRect().top;

        // Position the ball.
        ball.style.position = 'absolute';
        ball.style.xIndex = 1000;
        document.body.append(ball);

        // console.log(event.pageX);
        // console.log(event.pageY);

        moveAt(event.pageX, event.pageY);

        // Centers the ball at (pageX, pageY) coordinates.
        function moveAt(pageX, pageY) {
            ball.style.left = pageX - shiftX + 'px';
            ball.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        // (3) move the ball on mousemove
        document.addEventListener('mousemove', onMouseMove);

        // (4) drop the ball, remove unneeded handlers
        ball.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            ball.onmouseup = null;
        };

    };

    ball.ondragstart = function() {
        return false;
    };

}
