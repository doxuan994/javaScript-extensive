"use strict";


window.onload = function() {

    let tree = document.getElementById('tree');

    // Move all text into <span>
    // they occupy exactly the place necessary for the text,
    for (let li of tree.querySelectorAll('li')) {
        let span = document.createElement('span');
        li.prepend(span); // insert the span with an empty value after to all li tags

        // console.log(li);
        // add values to all span tags
        // console.log(span.nextSibling);
        span.append(span.nextSibling); // move the text node into span
        // console.log(li);
    }

    // Catch clicks on whole tree.
    tree.onclick = function(event) {
        // If it is not a span, nothing happened return.
        if (event.target.tagName != 'SPAN') {
            return;
        }

        let childrenContainer = event.target.parentNode.querySelector('ul');
        console.log(childrenContainer);
        if (!childrenContainer) return; // no childrenContainer
        childrenContainer.hidden = !childrenContainer.hidden;
    }

}
