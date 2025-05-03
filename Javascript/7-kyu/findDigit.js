function findDigit(num, nth) {
  if (nth <= 0) {
    return -1;
  }
  let valueA = Math.abs(num).toString().split("").reverse();
  if (nth > valueA.length) {
    return 0;
  }
  return +valueA[nth - 1];
}
