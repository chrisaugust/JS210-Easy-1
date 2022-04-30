// PROBLEM
// Write a porgram that prompts user for integer > 0,
// prompts for sum or product between 1 and integer input,
// and outputs result.
//
// EXAMPLES
// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s
//
// The sum of the integers between 1 and 5 is 15.
//
// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p
//
// The product of the integers between 1 and 6 is 720.
//
// DATA STRUCTURES
//
// ALGORITHM
// getUserInput
// - prompt user for integer; assign to variable
// - prompt user for operation; assign to variable
//
// sumOrProduct
// - declare result;
// - loop from 1 to integer, inclusive, with currentValue as loop variable
//   - conditional to determine which operation to use
//   - assign result to 0 for 'sum' or 1 for 'product'
//   - result *= or += currentValue
//
// CODE
'use strict';
const rlSync = require('readline-sync');

function sumOrProduct(integer, operation) {
  operation = operation === 's' ? 'sum' : 'product';
  let result = operation === 'sum' ? 0 : 1;

  for (let currentValue = 1; currentValue <= integer; currentValue += 1) {
    if (operation === 'sum') {
      result += currentValue;
    } else if (operation === 'product') {
      result *= currentValue;
    }
  }

  console.log(`The ${operation} of the integers between 1 and ${integer} is ${result}.`);
  return `The ${operation} of the integers between 1 and ${integer} is ${result}.`;
}

function getUserInput() {
  let validInteger = false;
  let validOperation = false;

  let integer;
  let operation;

  while (!validInteger) {
    integer = Number(rlSync.question('Please enter an integer greater than 0: '));

    if (integer <= 0 || !!integer === false) {
      console.log('Your input was invalid. Must be an integer greater than 0.');
    } else {
      validInteger = true;
    }
  }

  while (!validOperation) {
    operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
    operation = operation.trim();

    if (operation === 's' || operation === 'p') {
      validOperation = true;
    } else {
      console.log('You must enter either "s" for sum or "p" for product.');
    }
  }
  return [integer, operation];
}

function run() {
  sumOrProduct(...getUserInput());
}

run();

// TESTS
//console.log(sumOrProduct(5, 's') === 'The sum of the integers between 1 and 5 is 15.');
//console.log(sumOrProduct(6, 'p') === 'The product of the integers between 1 and 6 is 720.');
