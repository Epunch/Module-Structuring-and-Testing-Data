function countChar(stringOfCharacters, findCharacter) {
  let variable = 0; // moteghayer baraye shomaresh

  for (let i = 0; i < stringOfCharacters.length; i++) {
    if (stringOfCharacters[i] === findCharacter) {
      variable++;
    }
  }

  return variable;
}

module.exports = countChar;
