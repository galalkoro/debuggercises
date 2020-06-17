'use strict';

// practice using variables declared with let
//  fill in the blanks to log the commented values
// and don't just write the correct answer directly!
//  practice re-using values stored in variables to get the correct value

//let fruit = 'banana';
//let desert = 'cake';
//let topping = 'frosting';

let desert = 'chocolate ' + 'cake';
console.log(desert); // should log 'chocolate cake'

let topping = desert + 'frosting';
console.log(topping); // should log 'chocolate cake with frosting'

let fruit = topping + ' banana';
console.log(fruit); // should log 'chocolate cake with frosting and banana'
