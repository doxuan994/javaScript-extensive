"use strict";


window.onload = function() {

    let thumbs = document.getElementById('thumbs');

    thumbs.onclick = function(event) {

        let thumbnail = event.target.closest('a');

        if (!thumbnail) return;
        showThumnail(thumbnail.href, thumbnail.title);
        event.preventDefault();
        
    }

    function showThumnail(href, title) {
        largeImg.src = href;
        largeImg.alt = title;
    }

}
