'use strict';

//while-loop
// while (condition evaluates to true){execute this code} 
let usersGuess;

while (usersGuess !== 'yellow'){
  usersGuess = prompt('What is my fav color? (Hint: rhymes with marshmallow)');
}

//for-loop
// for-loop (initial value ; condition to evaluate ; increment) {code to execute}
function showUnicorns(){
  let usersNum = prompt('How many unicorns would you rate my page? 1-5');
  // 3
  
  for (let i = 0; i < usersNum && i < 5; i++){
    document.write('<img src="unicorn.jpeg" alt="colorful unicorn" class="unicorn"/>');
  }
}

// showUnicorns();