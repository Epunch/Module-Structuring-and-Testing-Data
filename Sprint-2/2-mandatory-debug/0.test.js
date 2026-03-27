// Predict and explain first...

// =============> write your prediction here

// The output will look like this:

//320

//The result of multiplying 10 and 32 is undefined

//The program will not throw a crashing error, but it will not behave as intended because the string will contain undefined.

// function multiply(a, b) {
//   console.log(a * b);
// }

//console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here

//The function uses console.log instead of return.
//console.log only prints a value to the screen, but it does not "give" the value back to the code. Without return, the function result is always undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
