"use strict";


window.onload = function() {

    let genres = document.getElementById('genres');


    // genres.selectedIndex – the number of the selected option.
    let selectedOption = genres.options[genres.selectedIndex];
    alert(selectedOption.value);

    let newOption = new Option("Classic", "classic");
    genres.append(newOption);

    newOption.selected = true;


}
