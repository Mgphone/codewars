//change it to string
//if value is odd add dash
function dashatize(num) {
  let changeString = Math.abs(num).toString().split("");
  let result = "";
  if (changeString.length == 1) {
    return changeString.join("");
  }
  for (let i = 0; i < changeString.length; i++) {
    if (changeString[i] % 2 == 0) {
      result += changeString[i];
    } else if (changeString[i] % 2 !== 0 && changeString[i - 1] % 2 == 0) {
      result += "-" + changeString[i] + "-";
    } else {
      result += changeString[i] + "-";
    }
  }
  return result.charAt(result.length - 1) == "-"
    ? result.slice(0, result.length - 1)
    : result;
}
