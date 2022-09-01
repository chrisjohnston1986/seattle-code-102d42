'use strict';
// proof of life --> to make sure it's connected to my HTML
// console.log('Hello World!');

// What/why functions?
// Command we can use to execute a set of steps

// Structure of a function
// function functionName(parameters){code to execute}
// let usersName;

function greetUser(){
  let usersName = prompt('What is your name?');
  document.write('Hi ' + usersName);
  return usersName;
}

// let usersName = greetUser();
// console.log(usersName);


function customMessage(name){
  let message;
      
  if (name == 'Kassie'){
    message = 'Hiya Teach!'
  } else if (name == 'Ben') {
    message = "Hi Ben!";
  } else if (name == 'Justin'){
    message = "Hi Justin!";
  } else if (name == 'potato'){
    message = "Mmm...potatos";
  } else {
    message = ' Welcome to my site!';
  }
  document.write(message);
}

// customMessage(usersName);

//                     // parameters
function addTwoNumbers(num1, num2){
  return num1 + num2;
}

// // console.log(addTwoNumbers(462, 9)); 
// //                             arguments
// let myNewNumber = addTwoNumbers(10,10);
// console.log(myNewNumber);

function emptyDishwasher(kidsName){
  console.log(kidsName + ', empty the dishwasher!');
  // go to dishwasher
  // if (dishwasher == 'closed'){
    // open dishwasher
  // }
  // pull out rack
  // pick up dish
  // put it away
  // repeat while dishwasher has dishes
}

let myResult = emptyDishwasher('zack');
console.log('THIS IS MY RESULT: ', myResult);