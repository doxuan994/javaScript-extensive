"use strict";


function loadPhones() {

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'phones.json');
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        button.innerHTML = 'Complete!';

        if (xhr.status != 200) {
            // console.log(xhr.status + ': ' + xhr.statusText);
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            // console.log(xhr.responseText);
            alert(xhr.responseText);
        }
    }



    let button = document.getElementById('button');

    button.innerHTML = 'Loading...'; // (2)
    button.disabled = true;
}
