function solution(string) {
  // iterate the string
  //if capital add space
  //if not just add normal
  let letter = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      letter += " " + string[i];
    } else {
      letter += string[i];
    }
  }
  return letter;
}
