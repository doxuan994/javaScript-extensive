"use strict";

/*
Walking the DOM
*/
// DOM navigation properties are great when elements are close to each other.

// window.onload = function() {
//
//     // change the background color to red
//     document.body.style.background = "red";
//
//     // change it back after 1 second
//     setTimeout(() => document.body.style.background = "", 1000);
//
// }

// DOM children
// window.onload = function() {
//     console.log(document.body.childNodes);
//     console.log(document.body.childNodes[1]);
//     console.log(document.body.childNodes[3]);
//     console.log(document.body.childNodes[3].lastElementChild);
//
//     console.log(document.body.children);
//     console.log(document.body.children[0]);
//     console.log(document.body.children[1]);
//     console.log(document.body.children[1].lastElementChild);
// }



// The sibling question
// elem.lastChild.nextSibling is always null true
// elem.children[0].previousSibling is always null false

// Select all diagonal cells

// My solution.
// window.onload = function() {
//
//     console.log(document.body.children[0].childNodes[1].children[0].childNodes[1]);
//
//     let td = document.body.children[0].childNodes[1].children[0].childNodes[1];
//     let td2 = document.body.children[0].childNodes[1].children[1].childNodes[3];
//     let td3 = document.body.children[0].childNodes[1].children[2].childNodes[5];
//     let td4 = document.body.children[0].childNodes[1].children[3].childNodes[7];
//     let td5 = document.body.children[0].childNodes[1].children[4].childNodes[9];
//
//     td.style.backgroundColor = "red";
//     td2.style.backgroundColor = "red";
//     td3.style.backgroundColor = "red";
//     td4.style.backgroundColor = "red";
//     td5.style.backgroundColor = "red";
//
// }


// Textbook solution.

// window.onload = function() {
//     let table = document.body.firstElementChild;
//     console.log(table);
//     console.log(table.rows);
//     console.log(table.rows.length);
//     console.log(table.rows[0].cells);
//
//     for (let i = 0; i < table.rows.length; i++) {
//         let row = table.rows[i];
//         row.cells[i].style.backgroundColor = 'red';
//     }
// }

/*
Searching: getElement* and querySelector*
*/
// window.onload = function() {
//     let table = document.getElementById("age-table");
//     table.style.backgroundColor = 'yellow';
//
//     let labels = document.querySelectorAll('#age-table label');
//     console.log(labels);
//
//     for (let i = 0; i < labels.length; i++) {
//         labels[i].style.color = "red";
//     }
//
//     let firstCellFirstRow = document.querySelector("#age-table tr td");
//     console.log(firstCellFirstRow);
//     firstCellFirstRow.style.fontWeight = "bold";
//
//     let form = document.getElementsByName('search')[0];
//     console.log(form);
//     form.style.backgroundColor = "green";
//
//     let firstInput = form.querySelector("input");
//     // Second way.
//     // // let firstInput = form.getElementsByTagName('input')[0]
//     console.log(firstInput);
//     firstInput.style.backgroundColor = "purple";
//
//
//     let inputs = form.querySelectorAll("input");
//     console.log(inputs[inputs.length - 1]);
//     let lastInput = inputs[inputs.length - 1];
//     lastInput.style.backgroundColor = "blue";
// }


/*
Node properties: type, tag and contents
*/

// Count descendants.

// window.onload = function() {
//     let parentUl = document.querySelector("ul");
//     // console.log(parentUl);
//
//     let parentLis = parentUl.children;
//
//     // console.log(parentLis);
//     console.log(parentLis[0]);
//     // console.log(parentLis[1]);
//     //
//     // console.log(parentLis[0].children[0].children);
//
//     let li = parentLis[0].querySelectorAll("li");
//     console.log("Animal: " + li.length);
//
//
//     let childrenLi = parentLis[0].querySelector("ul").children;
//     console.log(childrenLi);
//
//     let childChildLi = childrenLi[0].querySelectorAll("li");
//     console.log(childChildLi);
//     console.log("Mammals: " + childChildLi.length);
//
// }



// window.onload = function() {
//
//     for (let li of document.querySelectorAll('li')) {
//
//         let title = li.firstChild.data;
//         // console.log(title);
//         title = title.trim();
//
//         let count = li.getElementsByTagName('li').length;
//
//         // console.log(li.getElementsByTagName('li'));
//         console.log(title + ': ' + count);
//
//     }
//
// }


// What's in the nodeType?
// window.onload = function() {
//     alert(document.body.lastChild.nodeType);
// }

// Tag in comment
// window.onload = function() {
//     let body = document.body;
//
//     body.innerHTML = "<!--" + body.tagName + "-->";
//
//     alert( body.firstChild.data ); // what's here?
// }
// BODY



// console.log(document.constructor.name); // HTMLDocument
// console.log(HTMLDocument.prototype.__proto__.constructor.name); // Document
// console.log(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node


/*
Attributes and properties
*/

// Get the attribute.
// window.onload = function() {
//     let elem = document.querySelector('[data-widget-name]');
//
//     console.log(elem.dataset.widgetName);
//     console.log(elem.getAttribute('data-widget-name'));
// }



// Make external links orange
// window.onload = function() {
//     let link = document.querySelector('a');
//     link.style.color = 'orange';
//
//
//     let links = document.querySelectorAll('a');
//     console.log(links);
//
//     for (let link of links) {
//         let href = link.getAttribute('href');
//         console.log(href);
//         if (!href) continue;
//
//         if (!href.includes('://')) continue;
//
//         if (href.startsWith('http://internal.com')) continue;
//
//         link.style.color = 'orange';
//     }
// }


// window.onload = function() {
//     // Look for all links that have :// in href
//     // but href doesn't start with http://internal.com
//     let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
//     let links = document.querySelectorAll(selector);
//
//     links.forEach(link => link.style.color = 'orange');
// }


/*
Modifying the document.
*/

// createTextNode vs innerHTML vs textContent

// window.onload = function() {
//     let text = '<b>text</b>';
//
//     let elem1 = document.getElementById('elem1');
//     let elem2 = document.getElementById('elem2');
//     let elem3 = document.getElementById('elem3');
//
//     elem1.append(document.createTextNode(text));
//     elem2.innerHTML = text;
//     elem3.textContent = text;
// }

// 1 and 3 Both commands result in adding the text “as text” into the elem.
// 2 Add text and style.


// Clear the element

// THIS WILL NOT WORK.
// window.onload = function() {
//     function clear(elem) {
//         for (let i = 0; i < elem.childNodes.length; i++) {
//             elem.childNodes[i].remove();
//         }
//     }
//
//     let elem = document.getElementById('elem');
//     console.log(elem);
//     clear(elem);
// }



// window.onload = function() {
//     // function clear(elem) {
//     //     while (elem.firstChild) {
//     //         elem.firstChild.remove();
//     //     }
//     // }
//
//     function clear(elem) {
//         elem.innerHTML = '';
//     }
//     clear(elem);
// }



// Why does "aaa" remain?



// Create a list.
// window.onload = function() {
//     let ul = document.createElement('ul');
//     document.body.appendChild(ul);
//
//
//     while (true) {
//         let data = prompt("Enter the content of the list");
//
//         if (!data) {
//             break;
//         }
//
//         let li = document.createElement('li');
//         // li.innerHTML = data;
//         li.textContent = data;
//         ul.append(li);
//     }
// }


// Create a tree from the object.

// window.onload = function() {
//
//     let data = {
//         "Fish": {
//             "trout": {},
//             "salmon": {}
//         },
//
//         "Tree": {
//             "Huge": {
//                 "sequoia": {},
//                 "oak": {}
//             },
//             "Flowering": {
//                 "redbud": {},
//                 "magnolia": {}
//             }
//         }
//     };
//
//
//     function createTree(container, obj) {
//         container.innerHTML = createTreeText(obj);
//     }
//
//     function createTreeText(obj) { // standalone recursive function
//         let li = '';
//         let ul;
//         for (let key in obj) {
//             li += '<li>' + key + createTreeText(obj[key]) + '</li>';
//         }
//         if (li) {
//             ul = '<ul>' + li + '</ul>'
//         }
//         return ul || '';
//     }
//
//     createTree(container, data);
//
// }

// "use strict";


// Create a calendar
// window.onload = function() {
//
//     function createCalender(elem, year, month) {
//
//         let mon = month - 1; // month in JS are 0..11, not 1..12
//
//         // Create the first date of the month.
//         let d = new Date(year, mon);
//
//         let table =
//         '<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>Su</th></tr><tr>';
//
//         // Spaces for the first rows
//         // from Monday till the first day of the month.
//         console.log(d);
//         // console.log(getDay(d)); // 5 (Saturday)
//         for (let i = 0; i < getDay(d); i++) {
//             table += '<td></td>';
//         }
//
//         // <td> with actual dates
//         while (d.getMonth() == mon) { // stop when it goes to next month.
//             // getDate()
//             // Get the day of month, from 1 to 31,
//             // the name of the method does look a little bit strange.
//             // console.log(d.getDate());
//             table += '<td>' + d.getDate() + '</td>';
//
//
//             if (getDay(d) % 7 == 6) { // sunday, last day of week -- newline
//                 table += '</tr><tr>';
//             }
//
//             // Continue to increase by 1 to the next day until up to first day
//             // of the next month so that the condition in the while loop above
//             // will be fault.
//             d.setDate(d.getDate() + 1);
//             // console.log(d);
//         }
//
//         // Add spaces after last days of month for the last row.
//         if (getDay(d) != 0) { // if not Monday
//             for (let i = getDay(d); i < 7; i++) {
//                 table += '<td></td>';
//             }
//         }
//
//
//         // Close the table.
//         table += '</tr></table>';
//
//         elem.innerHTML = table;
//
//     }
//
//
//     function getDay(date) { // get day number from 0 (monday) to 6 (sunday)
//         let day = date.getDay();
//         // console.log(day);
//
//         // getDay() returns arrays in this order.
//         // Sunday Monday Tuesday Wednesday Thurday Friday Saturday
//         //   0      1       2        3        4       5      6
//
//         // Turn them into calendar order.
//         // Sunday Monday Tuesday Wednesday Thurday Friday Saturday
//         //   6      0       1        2        3       4      5
//
//         if (day == 0) day = 7;
//         return day - 1;
//     }
//
//
//     let calendar = document.getElementById('calendar');
//     createCalender(calendar, 2012, 9);
//
//     // console.log(calendar);
//
// }


// Colored clock with setInterval
// window.onload = function() {
//     let timerId;
//
//     function update() {
//         let clock = document.getElementById('clock');
//         let date = new Date();
//
//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
//         clock.children[0].innerHTML = hours;
//
//         let minutes = date.getMinutes();
//         if (minutes < 10) minutes = '0' + minutes;
//         clock.children[1].innerHTML = minutes;
//
//         let seconds = date.getSeconds();
//         if (seconds < 10) seconds = '0' + seconds;
//         clock.children[2].innerHTML = seconds;
//     }
//
//     function clockStart() {
//         timerId = setInterval(update, 1000);
//         update(); // <--  start right now, don't wait 1 second till the first setInterval works
//     }
//     //
//     // function clockStop() {
//     //     clearInterval(timerId);
//     // }
//
//     clockStart();
// }




// Insert the HTML in the list
// window.onload = function() {
//     let one = document.getElementById('one');
//     one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');
// }


// Sort the table

// window.onload = function() {
//     let sortedRows = Array.from(table.rows)
//     .slice(1)
//     .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
//
//     table.tBodies[0].append(...sortedRows);
// }


/*
Styles and classes
*/



// Create a notification

// "use strict";

// window.onload = function() {
//
//     function showNotification({top = 0, right = 0, className, html}) {
//
//         let notification = document.createElement('div');
//         notification.className = "notification";
//
//         // Add the "welcome" className if the notification has className.
//         // class="notification welcome"
//         if (className) {
//             notification.classList.add(className);
//         }
//
//         notification.style.top = top + 'px';
//         notification.style.right = right + 'px';
//
//         notification.innerHTML = html;
//         document.body.append(notification);
//
//         setTimeout(() => notification.remove(), 1500);
//     }
//
//     // Infinite
//     let i = 1;
//     let timerId = setInterval(() => {
//         showNotification({
//             top: 10,
//             right: 10,
//             html: 'Hello ' + i++,
//             className: "welcome"
//         });
//     }, 2000);
//
//     // Stop at Hello 5.
//     setTimeout(() => {clearInterval(timerId)}, 10000);
//
// }


/*
Element size and scrolling
*/


// What's the scroll from the bottom?
// What is the scrollbar width? // 16
// window.onload = function() {
//     // Create a div with the scroll.
//     let div = document.createElement('div');
//
//     div.style.overflowY = 'scroll';
//     div.style.width = '50px';
//     div.style.height = '50px';
//
//     // Must put it in the document, otherwise sizes will be 0.
//
//     document.body.append(div);
//     let scrollWidth = div.offsetWidth - div.clientWidth;
//
//     div.remove();
//
//     console.log(scrollWidth);
// }


// Place the ball in the field center
// window.onload = function() {
//
//     let ball = document.getElementById('ball');
//
//     // To align the ball center with the center of the field,
//     // we should move the ball to the half of its width to the left and
//     // to the half of its height to the top:
//     ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px';
//     ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px';
//
//
//     // console.log(ball.offsetWidth);
//     // console.log(ball.offsetHeight);
//     // console.log(ball);
//
// }


// The difference: CSS width versus clientWidth
// window.onload = function() {
//
// }

/*
Window sizes and scrolling.
*/

/*
Coordinates
*/

// Find window coordinates of the field
// window.onload = function() {
//
//     document.onclick = function(e) { // shows click coordinates
//         coords.innerHTML = e.clientX + ':' + e.clientY;
//     };
//
//     let fieldCoords = field.getBoundingClientRect();
//
//     let answer = [
//         [ // 1
//             fieldCoords.left,
//             fieldCoords.top
//         ],
//         [ // 2
//             fieldCoords.right,
//             fieldCoords.bottom
//         ],
//         [ // 3
//             fieldCoords.left + field.clientLeft,
//             fieldCoords.top + field.clientTop
//         ],
//         [ // 4
//             fieldCoords.left + field.clientLeft + field.clientWidth,
//             fieldCoords.top + field.clientTop + field.clientHeight
//         ]
//     ];
//
//
//
//     console.log(answer.join('  '));
//
// }

/*
Introduction to browser events.
*/


// Hide on click

// window.onload = function() {
//     document.getElementById('hider').onclick = function() {
//         document.getElementById('text').hidden = true;
//     }
// }


// Hide self


// Which handlers run?

// window.onload = function() {
//
//     // button.addEventListener("click", () => alert("1"));
//     // button.removeEventListener("click", () => alert("1"));
//     // button.onclick = () => alert(2);
//
//     function handler() {
//         console.log(1);
//     }
//
//     button.addEventListener("click", handler);
//
//     button.removeEventListener("click", handler);
//
// }

// Move the ball across the field
// window.onload = function() {
//
//     field.onclick = function(event) {
//
//         // Window-relative field coordinates
//         let fieldCoords = this.getBoundingClientRect();
//         // console.log(fieldCoords);
//
//         // The ball has position: absolute, the field: position: relative,
//         // so ball coordinates are relative to the field inner left-upper corner.
//
//         // fieldCoords.top = 26.399999618530273
//         // field.clientTop = 10
//         let ballCoords = {
//             top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
//             left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
//         };
//
//         // console.log(ball.clientHeight);
//         // console.log(event.clientY);
//
//         // Prevent crossing the top field boundary.
//         if (ballCoords.top < 0) ballCoords.top = 0;
//
//         // Prevent crossing the left field boundary.
//         if (ballCoords.left < 0) ballCoords.left = 0;
//
//         // Prevent crossing the right field boundary
//         if (ballCoords.left + ball.clientWidth > field.clientWidth) {
//             ballCoords.left = field.clientWidth - ball.clientWidth;
//         }
//
//         // Prevent crossing the bottom field boundary
//         if (ballCoords.top + ball.clientHeight > field.clientHeight) {
//             ballCoords.top = field.clientHeight - ball.clientHeight;
//         }
//
//         ball.style.left = ballCoords.left + 'px';
//         ball.style.top = ballCoords.top + 'px';
//     }
//
// }



// Create a sliding menu.
// window.onload = function() {
//     let menuElem = document.getElementById('sweeties');
//     let titleElem = menuElem.querySelector('.title');
//
//     titleElem.onclick = function() {
//         menuElem.classList.toggle('open');
//     };
// }


// Add a closing button.



































//
