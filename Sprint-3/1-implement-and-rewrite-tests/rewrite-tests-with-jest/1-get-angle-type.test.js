// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require("../implement/1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"

test("should return 'Acute angle' when the angle is less than 90 degrees", () => {
  const input = 45; // Test value for acute angle
  const result = getAngleType(input);
  expect(result).toEqual("Acute angle");
});

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"

test("should return 'Obtuse angle' when the angle is between 90 and 180 degrees", () => {
  const input = 120; // Test value for obtuse angle
  const result = getAngleType(input);
  expect(result).toEqual("Obtuse angle");
});

// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"

test("should return 'Straight angle' when the angle is exactly 180 degrees", () => {
  const input = 180;
  const result = getAngleType(input);
  expect(result).toEqual("Straight angle");
});

// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"

test("should return 'Reflex angle' when the angle is between 180 and 360 degrees", () => {
  const input = 270; // Test value for reflex angle
  const result = getAngleType(input);
  expect(result).toEqual("Reflex angle");
});
