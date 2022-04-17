// PROBLEM
// Write a program that asks user for length and width of a room
// (in meters), and logs area of room in square meters and square feet. 
//
// 1 square meter == 10.7639 square feet
//
// EXAMPLES
// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet). 
//
// ALGORITHM
// initialize const SQUARE_METERS_TO_SQUARE_FEET to 10.7639
// require readline-sync
// prompt user for length of room
// prompt user for width of room
// initialize roomSizeMeters to length * width
// initialize roomSizeFeet to roomSizeMeters * SQUARE_METERS_TO_SQUARE_FEET
// log message with roomSizeMeters and roomSizeFeet
//
// CODE
// version1
//
// let rlSync = require('readline-sync');
// 
// const SQUARE_METERS_TO_SQUARE_FEET = 10.7639;
// 
// console.log('Enter the length of the room in meters: ');
// let length = rlSync.prompt();
// length = parseInt(length, 10);
// 
// console.log('Enter the width of the room in meters: ');
// let width = rlSync.prompt();
// width = parseInt(width, 10);
// 
// let roomSizeMeters = length * width;
// let roomSizeFeet = roomSizeMeters * SQUARE_METERS_TO_SQUARE_FEET;
// 
// console.log(`The area of the room is ${roomSizeMeters.toFixed(2)} square meters (${roomSizeFeet.toFixed(2)} square feet)`);
//
// version2

// returns array with units, length, and width
function promptForDimensions() {
  let rlSync = require('readline-sync');

  let units;  
  do {
    console.log('Enter the units of measurement (meters/feet): ');
    units = rlSync.prompt();
  } while (units !== 'feet' && units !== 'meters');

  console.log('Enter the length of the room:');
  let length = rlSync.prompt();
  length = parseInt(length, 10);

  console.log('Enter the width of the room:');
  let width = rlSync.prompt();
  width = parseInt(width, 10);

  return [units, length, width];
}

function calculateArea(dimensionsArray) {
  const SQUARE_METERS_TO_SQUARE_FEET = 10.7639;

  let units = dimensionsArray[0];
  let length = dimensionsArray[1];
  let width = dimensionsArray[2];
  
  let area = length * width;
  let convertedArea;

  let areaString;
  let convertedAreaString;

  if (units === 'meters') {
    areaString = String(area) + ' square_meters';
    convertedAreaString = 
      String(area * SQUARE_METERS_TO_SQUARE_FEET) + ' square feet';
  } else if (units === 'feet') {
    areaString = String(area) + ' square feet';
    convertedAreaString = 
      String(area / SQUARE_METERS_TO_SQUARE_FEET) + ' square meters';
  }  

  console.log(`The area of the room is ${areaString} (${convertedAreaString})`);
}

calculateArea(promptForDimensions());
