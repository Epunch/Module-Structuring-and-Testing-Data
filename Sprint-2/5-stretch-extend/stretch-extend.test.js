// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  let hours = Number(time.slice(0, 2));
  let minutes = time.slice(3, 5);

  if (hours === 0) {
    return "12:" + minutes + " am";
  } else if (hours === 12) {
    return "12:" + minutes + " pm";
  } else if (hours > 12) {
    let newHours = hours - 12;
    if (newHours < 10) {
      newHours = "0" + newHours;
    }
    return newHours + ":" + minutes + " pm";
  } else {
    return time + " am";
  }
}

// i just Used console.log to actually see the result in the terminal
console.log("Test 08:00 ->", formatAs12HourClock("08:00"));
console.log("Test 23:00 ->", formatAs12HourClock("23:00"));
console.log("Test 00:15 ->", formatAs12HourClock("00:15"));
