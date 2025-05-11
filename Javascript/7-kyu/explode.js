function explode(s) {
  let result = "";
  let splitS = s.split("");
  for (let i = 0; i < splitS.length; i++) {
    if (splitS[i] > 0) {
      for (let j = 0; j < splitS[i]; j++) {
        result += splitS[i];
      }
    }
  }
  return result;
}
