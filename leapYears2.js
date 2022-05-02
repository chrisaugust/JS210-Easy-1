// PROBLEM
// Write a function that takes any year greater than 0
// and returns true/false based on whether that year
// is a leap year.
//
// Factor in the adoption date of the Gregorian Calendar
// by the British Empire, which took place in 1752. Prior
// to this, under the Julian Calendar, leap years took place
// in every year evenly divisible by 4.
//
// Requirements
// - for years prior to 1752, a leap year is any year
//   evenly divisible by 4
// - for years subsequent to and including 1752:
//   - a leap year is evenly divisible by 4, unless also
//     divisible by 100
//   - a year divisible by 4, and also by 100, but which
//     is evenly divisible by 400 IS a leap year
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
// isLeapYear(1700);      // true
// isLeapYear(1);         // false
// isLeapYear(100);       // true
// isLeapYear(400);       // true
//
// ALGORITHM
// - check that year is greater than 0
// - for years between 0 and 1752, check if year
//   is evenly divisible by 4
// - for years subsequent to 1752:
//   - if evenly divisible by 400 return true
//   - if evenly divisible by 100 return false
//   - if evenly divisible by 4 return true
//   - return false
//
// CODE

function isLeapYear(year) {
  if (year <= 0 || typeof (year) !== 'number') return undefined;

  if (year < 1752 && year % 4 === 0) return true;
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
console.log(isLeapYear(1700) === true);
console.log(isLeapYear(1) === false);
console.log(isLeapYear(100) === true);
console.log(isLeapYear(400) === true);
