// const penceString = "399p";

// const penceStringWithoutTrailingP = penceString.substring(
//   0,
//   penceString.length - 1
// );

// const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// const pounds = paddedPenceNumberString.substring(
//   0,
//   paddedPenceNumberString.length - 2
// );

// const pence = paddedPenceNumberString
//   .substring(paddedPenceNumberString.length - 2)
//   .padEnd(2, "0");

// console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

// 1. Initialize the raw input string with the value "399p"
const penceString = "399p";

// 2. Remove the "p" from the end to isolate the numeric part ("399")
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

// 3. Ensure at least 3 digits (e.g., "005") to correctly split pounds from pence
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

// 4. Extract all characters except the last two to get the "pounds" part
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

// 5. Extract the last two digits for "pence" and ensure they are 2 characters long
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

// 6. Combine all parts into the final currency format: £3.99
console.log(`£${pounds}.${pence}`);
