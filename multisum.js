// PROBLEM
// Write a function that computes the sum of all numbers
// between 1 and the argument number, inclusive, which are
// multiple of 3 or 5.
//
// EXAMPLES
// if the supplied number is 20, the result should be 98
// (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20)
//
// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168
//
// ALGORITHM
// - initialize sum to 0
// - iterate over numbers from 1 to num (the argument)
//    - for numbers that are multiples of 3 or 5, sum += candidateNum
// - return tum
//
// CODE

function multisum(num) {
  let sum = 0;

  for (let candidateNum = 1; candidateNum <= num; candidateNum += 1) {
    if (candidateNum % 3 === 0 || candidateNum % 5 === 0) {
      sum += candidateNum;
    }
  }

  return sum;
}

// TESTS
console.log(multisum(3) === 3);
console.log(multisum(5) === 8);
console.log(multisum(10) === 33);
console.log(multisum(1000) === 234168);
