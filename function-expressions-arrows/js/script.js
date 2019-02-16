// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
//
// function showOk() {
//     alert( "You agreed." );
// }
//
// function showCancel() {
//     alert( "You canceled the execution." );
// }
//
// // usage: functions showOk, showCancel are passed as arguments to ask
// ask("Do you agree?", showOk, showCancel);
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
//
// ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
// );
// let age = prompt("What is your age?", 18);
//
// let welcome = (age < 18) ?
// function() { alert("Hello!"); } :
// function() { alert("Greetings!"); };
//
// welcome(); // ok now
// let age = prompt("What is your age?", 18);
//
// let welcome = (age < 18) ?
// () => alert('Hello') :
// () => alert("Greetings!");
//
// welcome(); // ok now
// let sum = (a, b) => {  // the curly brace opens a multiline function
//     let result = a + b;
//     return result; // if we use curly braces, use return to get results
// };
//
// alert( sum(1, 2) ); // 3
