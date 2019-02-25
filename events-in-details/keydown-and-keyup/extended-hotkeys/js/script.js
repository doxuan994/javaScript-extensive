"use strict";


window.onload = function() {

    function runOnKeys(func, ...codes) {

        let pressed = new Set();

        document.addEventListener('keydown', function(event) {
            pressed.add(event.code);
            
            for (let code of codes) { // are all keys in the set?
                if (!pressed.has(code)) {
                    return;
                }
            }


            // yes, they are


            pressed.clear();

            func();

        });


        document.addEventListener('keyup', function(event) {
            pressed.delete(event.code);
        });
    }

    runOnKeys(
        () => alert("Hello!"),
        "KeyQ",
        "KeyW"
    );

}
