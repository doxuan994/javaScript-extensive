"use strict";


window.onload = function() {

    let tooltipElem;

    document.onmouseover = function() {
        let target = event.target;

        // If we have tooltip HTML...
        let tooltipHtml = target.dataset.tooltip;
        if (!tooltipHtml) return; // no tooltip

        // ...create the tooltip element

        tooltipElem = document.createElement('div');
        tooltipElem.className = 'tooltip';
        tooltipElem.innerHTML = tooltipHtml;
        document.body.append(tooltipElem);

        // Position it above the annotated element (top-center)
        let coords = target.getBoundingClientRect();

        let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
        // console.log(left);

        if (left < 0) left = 0; // don't cross the left window edge

        let top = coords.top - tooltipElem.offsetHeight - 5;
        if (top < 0) { // if crossing the top window edge, show below instead
            top = coords.top + target.offsetHeight + 5;
        }

        tooltipElem.style.left = left + 'px';
        tooltipElem.style.top = top + 'px';

    };

    document.onmouseout = function(e) {
        if (tooltipElem) {
            tooltipElem.remove();
            tooltipElem = null;
        }
    };

}
