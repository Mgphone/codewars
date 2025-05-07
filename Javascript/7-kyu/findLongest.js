function findLongest(array) {
  // code here
  let hightestValue = array.map((ele) => ele.toString().split("").length);
  let valueIndex = 0;
  let highest = Math.max(...hightestValue);
  for (let i = 0; i < hightestValue.length; i++) {
    if (hightestValue[i] !== highest) {
      valueIndex += 1;
    } else break;
  }
  return array[valueIndex];
}
