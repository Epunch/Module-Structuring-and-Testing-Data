// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

//The program will throw a SyntaxError because a function definition cannot have a literal number as its input parameter.

// function square(3) {
//     return num * num;
// }

// =============> write the error message here

// SyntaxError: Unexpected number

// =============> explain this error message here

// In JavaScript, when you define a function, the input (parameter) must be a variable name (an identifier), not a fixed value like the number 3. The variable acts as a placeholder for whatever value is passed to the function later. Additionally, the code tries to use a variable named num inside the function, but it was never defined because the input was incorrectly set to 3.

// Finally, correct the code to fix the problem

// =============> write your new code here

// We replace the number 3 with a variable name 'num'
function square(num) {
  return num * num;
}

// Now we can use the function by passing 3 as an input
const result = square(3);
console.log(result); // Output: 9
