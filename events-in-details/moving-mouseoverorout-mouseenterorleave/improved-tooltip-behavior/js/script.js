"use strict";


window.onload = function() {

    let tooltip;

    document.onmouseover = function(event) {
        // If there is data-tooltip this will return the elememt.
        // let anchorElem = event.target.closest('[data-tooltip]');
        let anchorElem = event.target.closest('[data-tooltip]');
        // console.log(anchorElem);

        if (!anchorElem) return;

        // Show tooltip and remember it.
        // anchorElem.dataset.tooltip (Content of the tooltip).
        tooltip = showTooltip(anchorElem, anchorElem.dataset.tooltip);
    }

    document.onmouseout = function() {
        if (tooltip) {
            tooltip.remove();
            tooltip = false;
        }
    }

    function showTooltip(anchorElem, html) {
        let tooltipElem = document.createElement('div');
        tooltipElem.className = 'tooltip';
        tooltipElem.innerHTML = html;
        document.body.append(tooltipElem);

        let coords = anchorElem.getBoundingClientRect();

        // Position the tooltip over the center of the element.
        let left = coords.left + (anchorElem.offsetWidth - tooltipElem.offsetWidth) / 2;
        if (left < 0) left = 0;

        // If there is space on the top, the tooltip will display on the top,
        let top = coords.top - tooltipElem.offsetHeight - 5;
        // but if there is no space the tooltip will display at the bottom.
        if (top < 0) {
            top = coords.top + anchorElem.offsetHeight + 5;
        }

        tooltipElem.style.left = left + 'px';
        tooltipElem.style.top = top + 'px';

        return tooltipElem;
    }

}
