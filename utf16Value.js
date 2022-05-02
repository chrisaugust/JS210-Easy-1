// PROBLEM
// Write a function that determines and returns the
// sum of the UTF-16 values for every character in the
// string passed in as argument.
//
// Use String.prototype.charCodeAt().
//
// EXAMPLES
// utf16Value('Four score');         // 984
// utf16Value('Launch School');      // 1251
// utf16Value('a');                  // 97
// utf16Value('');                   // 0
//
// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
// const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
// utf16Value(OMEGA);                  // 937
// utf16Value(OMEGA + OMEGA + OMEGA);  // 2811
//
// ALGORITHM
// - initialize sum to 0
// - iterate over characters in string
//    - determine UTF-16 value for currentChar
//    - add that value to sum
// - return sum
//
// CODE
//
// version 1
// function utf16Value(str) {
//   let sum = 0;
//
//   for (let idx = 0; idx < str.length; idx += 1) {
//     sum += str.charCodeAt(idx);
//   }
//
//   return sum;
// }
//
// version 2 using reduce()

function utf16Value(str) {

  let sum = str.split('').reduce(
    (acc, char) => acc + char.charCodeAt(0), 0
  );

  return sum;
}

// TESTS
console.log(utf16Value('Four score') === 984);
console.log(utf16Value('Launch School') === 1251);
console.log(utf16Value('a') === 97);
console.log(utf16Value('') === 0);

const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA) === 937);
console.log(utf16Value(OMEGA + OMEGA + OMEGA) === 2811);
