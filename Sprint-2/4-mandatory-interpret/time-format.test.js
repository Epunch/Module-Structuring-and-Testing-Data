function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> It will be called 3 times. (Once for totalHours, once for remainingMinutes, and once for remainingSeconds).

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> The value is 0. (Because totalHours is calculated as 0).

// c) What is the return value of pad is called for the first time?
// =============> The return value is "00" (as a string).

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> The value is 1. Explanation: The last call to pad uses remainingSeconds. When seconds is 61, 61 % 60 equals 1. So pad(1) is executed.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> The return value is "01". Explanation: Inside the pad function, 1.toString() becomes "1", and .padStart(2, "0") adds a leading zero to make the string exactly 2 characters long.
