'use strict';

// declare a variable
let myName;
console.log(myName);
// reassign the variable
myName = 'Kassie';
console.log(myName);
// reassign it again
myName = 'Allen';
console.log(myName);

console.log('Hello World!');

// declare a variable called x, assign it value of the value 10
let x = 10;
console.log(x);

let usersName = prompt('What is your name?');
let message;

//structure of if/else
// if(condition to evaluate){code to execute}else{code to execute}

// if (usersName == 'Kassie'){
//   message = 'Hiya Teach!'
// } else {
//   message = 'Welcome to my site!';
// }

if (usersName == 'Kassie'){
  message = 'Hiya Teach!'
} else if (usersName == 'Ben') {
  message = "Hi Ben!";
} else if (usersName == 'Justin'){
  message = "Hi Justin!";
} else {
  message = 'Welcome to my site!';
}
document.write('Hi ' + usersName);
document.write(message);
// console.log(usersName);
// message = 'Hi, ' + usersName + '!';
// console.log(message);
