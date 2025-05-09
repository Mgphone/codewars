function capitalize(s, arr) {
  let sArr = s.split("");
  let result = [];
  for (let i = 0; i < sArr.length; i++) {
    if (arr.includes(i)) {
      result.push(sArr[i].toUpperCase());
    } else {
      result.push(sArr[i]);
    }
  }
  return result.join("");
}
