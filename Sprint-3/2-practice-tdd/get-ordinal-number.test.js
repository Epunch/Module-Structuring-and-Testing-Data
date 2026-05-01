const getOrdinalNumber = require("./get-ordinal-number");

// Given a number,
// When the getOrdinalNumber function is called with this input,
// Then it should return the correct ordinal string.

// Case 1: Identify the ordinal number for 1
test("should return '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
});

// Case 2: Identify the ordinal number for 2
test("should return '2nd' for 2", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
});

// Case 3: Identify the ordinal number for 3
test("should return '3rd' for 3", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
});

// Case 4: Handle other numbers
test("should return 'th' for numbers other than 1, 2, or 3", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(10)).toEqual("10th");
});
// Case 5: Handle numbers ending in 1, 2, or 3 after 20
test("should return '21st' for 21", () => {
  expect(getOrdinalNumber(21)).toEqual("21st");
});

test("should return '22nd' for 22", () => {
  expect(getOrdinalNumber(22)).toEqual("22nd");
});

test("should return '23rd' for 23", () => {
  expect(getOrdinalNumber(23)).toEqual("23rd");
});
