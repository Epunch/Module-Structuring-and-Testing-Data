// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

// We declare the function with a parameter named 'amount'
function toPounds(amount) {
  // Use a template literal to format the number with the £ symbol
  // We use .toFixed(2) because currency usually has two decimal places
  return `£${amount.toFixed(2)}`;
}

// Now we call the function a number of times to check it works
console.log(toPounds(10)); // Output: £10.00
console.log(toPounds(1.5)); // Output: £1.50
console.log(toPounds(100.25)); // Output: £100.25
