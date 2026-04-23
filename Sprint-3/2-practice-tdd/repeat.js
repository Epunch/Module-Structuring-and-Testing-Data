function repeat(str, count) {
  if (count < 0) {
    throw new Error("Count must be a non-negative integer");
  }

  let variable = ""; // inja natije ro jam mikonim

  for (let i = 0; i < count; i++) {
    variable += str;
  }

  return variable;
}

module.exports = repeat;
