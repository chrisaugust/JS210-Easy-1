// PROBLEM
// Log all odd numbers from 1 to 99 inclusive.
// Each number should be logged on a separate line.
//
// EXAMPLES
//
// oddNumbers();
// 1
// 3
// 5
// ...
// 99
//
// DATA STRUCTURES
// none required
//
// ALGORITHM
// use a for loop with counter set to 1,
//   which runs until counter <= 99, incrementing by 2
// console.log the value of counter
//
// CODE
// version 1
// const oddNumbers = () => {
//   for (let counter = 1; counter <= 99; counter += 2) {
//     console.log(counter);
//   }
// }
// oddNumbers();
// 
// version 2
// takes user specified number as limits

let rlSync = require('readline-sync');

let lowerLimit;
let upperLimit;
  
console.log('Please choose two odd numbers.');
lowerLimit = parseInt(rlSync.question('Input lower limit (odd number): '));
upperLimit = parseInt(rlSync.question('Input upper limit (odd number): '));

let oddNumbers = (start, end) => {
  for (let i = start; i <= end; i += 2) {
    console.log(i);
  }
}

oddNumbers(lowerLimit, upperLimit);
