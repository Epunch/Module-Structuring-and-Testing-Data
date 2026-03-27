// Predict and explain first...
//  =============> write your prediction here

//The sum of 10 and 32 is undefined

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here

// In JavaScript, as soon as a function reaches a return statement, it stops executing and exits immediately.
// 1.Your function has a return followed by a semicolon (or a newline), which means it returns nothing (undefined).
// 2.The line a + b; is never reached because it is placed after the return statement.
// 3.Therefore, the function result is undefined.
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  // Move the calculation to the same line as return
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`); // Output: 42