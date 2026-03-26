let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// a) There are 7 function calls in this file. The lines where the function calls are made are:
// - carPrice.replaceAll(",", "")
// - priceAfterOneYear.replaceAll(",", "")
// - Number(carPrice.replaceAll(",", ""))
// - Number(priceAfterOneYear.replaceAll(",", ""))
// - console.log(`The percentage change is ${percentageChange}`)
// - replaceAll is called twice, and Number is called twice, and console.log is called once.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// b) This is a SyntaxError because the .replaceAll() method requires a comma to separate its two arguments (the search string and the replacement string). In this line, the comma between "," and "" is missing. To fix this problem, we need to add a comma between the two arguments in the .replaceAll() method calls. The corrected lines should be:

// d) Identify all the lines that are variable declarations

// d) The lines that are variable declarations are:
// - let carPrice = "10,000";
// - let priceAfterOneYear = "8,543";
// - const priceDifference = carPrice - priceAfterOneYear;
// - const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// e) The expression Number(carPrice.replaceAll(",","")) is first calling the .replaceAll() method on the carPrice string to remove all commas from the string. This is necessary because the presence of commas in a number string can prevent it from being correctly converted to a number. After removing the commas, the resulting string is passed to the Number() function, which converts the cleaned string into a numeric value. The purpose of this expression is to convert the carPrice string, which contains commas, into a numeric value that can be used for calculations.
