function maxDiff(list) {
  //sort
  let changeArray = list.sort((a, b) => b - a);
  if (list.length <= 1) {
    return 0;
  }
  return changeArray[0] - changeArray[changeArray.length - 1];
}
