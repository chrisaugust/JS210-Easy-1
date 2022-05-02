// PROBLEM
// Write a function that takes any year greater than 0
// and returns true/false based on whether that year
// is a leap year.
//
// Requirements
// - a leap year is evenly divisible by 4, unless also
//   divisible by 100
// - a year divisible by 4, and also by 100, but which
//   is evenly divisible by 400 IS a leap year
//
// EXAMPLES
// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // false
// isLeapYear(1);         // false
// isLeapYear(100);       // false
// isLeapYear(400);       // true
//
// DATA STRUCTURE
//
// ALGORITHM
// - check that year is greater than 0
// - check if year is divisisble by 4
//   - if divisible by 100 && divisible by 400
//     - return true
//   - if not divisible by 400
//     - return false
// - return false
//
// CODE
// version 1
// function isLeapYear(year) {
//   if (year <= 0 || typeof(year) !== 'number') {
//     return undefined;
//   }
//
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return true;
//       }
//       return false;
//     }
//     return true;
//   }
//   return false;
// }
//
// version 2

function isLeapYear(year) {
  if (year <= 0 || typeof (year) !== 'number') return undefined;
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return (year % 4 === 0);
}

// TESTS
console.log(isLeapYear(2016) === true);
console.log(isLeapYear(2015) === false);
console.log(isLeapYear(2100) === false);
console.log(isLeapYear(2400) === true);
console.log(isLeapYear(240000) === true);
console.log(isLeapYear(240001) === false);
console.log(isLeapYear(2000) === true);
console.log(isLeapYear(1900) === false);
console.log(isLeapYear(1752) === true);
console.log(isLeapYear(1700) === false);
console.log(isLeapYear(1) === false);
console.log(isLeapYear(100) === false);
console.log(isLeapYear(400) === true);
