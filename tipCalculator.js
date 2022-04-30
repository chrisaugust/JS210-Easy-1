'use strict';
// PROBLEM
// Create a tip calculator. User is prompted for a bill amount
// and a tip rate. Program computes the tip, logging both tip amount
// and total amount to console.
// Ignore input validation, assuming that input will be valid numbers.
//
//
// EXAMPLES
// What is the bill? 200
// What is the tip percentage? 15
//
// The tip is $30.00
// The total is $230.00
//
// DATA STRUCTURES
// Object to hold receipt information (bill subtotal, tip rate, etc.)
//
// ALGORITHM
// - prompt user for bill and tip percentage; save to properties of
//   receipt object
// - call calculateTip()
// - log results with logCalculations()
//
// CODE
let rlSync = require('readline-sync');

let promptForBillAndTip = () => {
  let amount = parseFloat(rlSync.question('What is the bill? '));
  let tipRate = parseFloat(rlSync.question('What is the tip percentage? '));
  let receipt = {
    amount: amount,
    tipRate: tipRate,
  };

  return receipt;
};

let calculateTipAndTotal = (receipt) => {
  receipt['tipAmount'] = receipt['amount'] * receipt['tipRate'] / 100;
  receipt['total'] = receipt['tipAmount'] + receipt['amount'];
  return receipt;
};

let logCalculations = (receipt) => {
  console.log(`The tip is $${receipt['tipAmount'].toFixed(2)}`);
  console.log(`The total is $${receipt['total'].toFixed(2)}`);
};
// TESTS

let bill = promptForBillAndTip();
let receipt = calculateTipAndTotal(bill);
logCalculations(receipt);
