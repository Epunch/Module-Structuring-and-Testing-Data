function getOrdinalNumber(num) {
  // Handle the 'teen' exceptions (11, 12, 13) that always end in 'th'
  if (num % 100 >= 11 && num % 100 <= 13) {
    return num + "th";
  }

  // Identify the last digit to determine the correct suffix for all other numbers
  const lastDigit = num % 10;

  if (lastDigit === 1) return num + "st";
  if (lastDigit === 2) return num + "nd";
  if (lastDigit === 3) return num + "rd";

  return num + "th";
}

module.exports = getOrdinalNumber;
