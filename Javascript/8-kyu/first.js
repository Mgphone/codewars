function first(arr, n) {
  // return arr;
  if (n == 0) {
    return [];
  }
  let result = [arr[0]];
  for (let i = 1; i < n; i++) {
    if (i < arr.length) {
      result.push(arr[i]);
    }
  }
  return result;
}
