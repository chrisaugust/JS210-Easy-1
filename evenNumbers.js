// PROBLEM
// Log all even numbers from 1 to 99 inclusive.
// Each number should be logged on a separate line.
//
// EXAMPLES
//
// oddNumbers();
// 2
// 4
// 6
// ...
// 98
//
// DATA STRUCTURES
// none required
//
// ALGORITHM
// use a for loop with counter set to 2,
//   which runs until counter <= 99, incrementing by 2
// console.log the value of counter
//
// CODE
// version 1
// const evenNumbers = () => {
//   for (let counter = 2; counter <= 99; counter += 2) {
//     console.log(counter);
//   }
// }
// evenNumbers();
// 
// version 2
// takes user specified number as limits
//
let rlSync = require('readline-sync');
 
let lowerLimit;
let upperLimit;
  
console.log('Please choose two even numbers.');
lowerLimit = parseInt(rlSync.question('Input lower limit (even number): '));
upperLimit = parseInt(rlSync.question('Input upper limit (even number): '));

let evenNumbers = (start, end) => {
  for (let i = start; i <= end; i += 2) {
    console.log(i);
  }
}

evenNumbers(lowerLimit, upperLimit);
