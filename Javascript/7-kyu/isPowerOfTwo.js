function isPowerOfTwo(n) {
  //.. should return true or false ..
  //will save power of 2 value in array
  //check include and output to be true or false
  let checkerValue = [];
  for (let i = 0; i < 250; i++) {
    checkerValue.push(Math.pow(2, i));
  }
  return checkerValue.includes(n);
}
