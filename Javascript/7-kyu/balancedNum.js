function balancedNum(number) {
  let changeArray = number.toString();
  if (changeArray.length <= 2) {
    return "Balanced";
  }
  //if even 0,Mat
  let value;

  value = Math.floor(changeArray.length / 2);
  let firstvalue;
  let secondvalue;
  if (changeArray.length % 2 == 0) {
    firstvalue = number.toString().substring(0, value - 1);
    secondvalue = number.toString().substring(value + 1);
  } else {
    firstvalue = number.toString().substring(0, value);
    secondvalue = number.toString().substring(value + 1);
  }
  let valueFirst = firstvalue
    .toString()
    .split("")
    .reduce((a, b) => a + +b, 0);
  let valueSecond = secondvalue
    .toString()
    .split("")
    .reduce((a, b) => a + +b, 0);
  console.log([valueFirst, valueSecond]);
  return valueFirst == valueSecond ? "Balanced" : "Not Balanced";
}
