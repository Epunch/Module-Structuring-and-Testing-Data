const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

// Fix: added .padStart() to ensure 2-digit formatting (e.g., 05 instead of 5)
const hh = totalHours.toString().padStart(2, "0");
const mm = remainingMinutes.toString().padStart(2, "0");
const ss = remainingSeconds.toString().padStart(2, "0");

const result = `${hh}:${mm}:${ss}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// answer: 6 variable declarations.

// b) How many function calls are there?

// answer: 1 function call (console.log).

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// answer is : %.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// answer: The expression (movieLength - remainingSeconds) / 60 calculates the total number of whole minutes by removing extra seconds before dividing by 60.

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// answer: The variable result represents the formatted string of the movie length in hours, minutes, and seconds. A better name for this variable could be formattedMovieLength or movieDurationFormatted.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// answer : No, it fails with negative numbers and doesn't add leading zeros to single digits (e.g., 1:5:9 instead of 01:05:09).
