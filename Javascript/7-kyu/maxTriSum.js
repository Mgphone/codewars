function maxTriSum(numbers) {
  //your code here
  let sortNum = numbers.sort((a, b) => b - a);
  let redu = [];
  for (let i = 0; i < sortNum.length; i++) {
    if (sortNum[i + 1] !== sortNum[i]) {
      redu.push(sortNum[i]);
    }
  }
  return redu[0] + redu[1] + redu[2];
}
