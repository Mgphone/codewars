function giveMeFive(obj) {
  //coding here
  let result = [];
  for (var value in obj) {
    if (value.length === 5) {
      result.push(value);
    }
    if (obj[value].length === 5) {
      result.push(obj[value]);
    }
  }
  return result;
}
