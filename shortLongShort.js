// PROBLEM
// Write a function that takes two strings as arguments,
// determines the length of the two strings, and returns
// a string which is a concatenation of the short, long,
// and short string again.
//
// Assume that the string arguments are different lengths.
//
// EXAMPLES
// shortLongShort('abc', 'defgh');    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"
//
// ALGORITHM
// - compare lengths and assign to long and short variables
// - concatenate short + long + short and return the result
//
// CODE

function shortLongShort(string1, string2) {
  let long = string1.length > string2.length ? string1 : string2;
  let short = string1.length > string2.length ? string2 : string1;

  return short + long + short;
}

// TESTS
console.log(shortLongShort('abc', 'defgh') === "abcdefghabc");
console.log(shortLongShort('abcde', 'fgh') === "fghabcdefgh");
console.log(shortLongShort('', 'xyz') === "xyz");
