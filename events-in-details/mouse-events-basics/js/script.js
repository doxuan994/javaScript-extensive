"use strict";


window.onload = function() {

    let ul = document.getElementById('ul');

    ul.onclick = function(event) {
        if (event.target.tagName != "LI") return;

        if (event.ctrlKey || event.metaKey) {
            toggleSelect(event.target);
        } else {
            singleSelect(event.target);
        }
    }

    // Prevent unneeded selection of list elements on clicks.
    ul.onmousedown = function() {
            return false;
    };

    function toggleSelect(li) {
        li.classList.toggle('selected');
    }

    function singleSelect(li) {
        let selected = ul.querySelectorAll('.selected');

        // Remove all other lists.
        for (let elem of selected) {
            elem.classList.remove('selected');
        }

        // Apply style only on the one selected.
        li.classList.add('selected');
    }

}
