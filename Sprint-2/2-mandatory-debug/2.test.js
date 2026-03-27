// Predict and explain first...
// The output will be:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Predict the output of the following code:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
// =============> Write your prediction here
// The function getLastDigit is not working properly for two reasons:

// Ignoring Input: The function does not have an input (parameter) defined. Even though you are passing numbers like 42 or 105 when calling it, the function doesn't "catch" them.

// Global Variable: Inside the function, it always refers to the variable num defined at the top (const num = 103). Since the last digit of 103 is 3, it returns 3 every single time, regardless of what you pass to it.

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// Explain why the output is the way it is
// =============> write your explanation here
// Finally, correct the code to fix the problem
// =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// Add 'num' as an input (parameter) to the function
function getLastDigit(num) {
  // Now it uses the number passed to it, not the one outside
  return num.toString().slice(-1);
}

// Now these will work correctly
console.log(`The last digit of 42 is ${getLastDigit(42)}`); // Output: 2
console.log(`The last digit of 105 is ${getLastDigit(105)}`); // Output: 5
console.log(`The last digit of 806 is ${getLastDigit(806)}`); // Output: 6
