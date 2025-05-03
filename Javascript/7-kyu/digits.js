function digits(n) {
  // TODO
  let changeArray = n.toString().split("");
  let result = 0;
  for (let i = 0; i < changeArray.length; i++) {
    result += 1;
  }
  return result;
}
