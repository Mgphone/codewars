function factorial(n) {
  // Calculate the factorial here
  if (n < 0 || n > 12) {
    throw new Error("ValueError");
  }
  if (n == 0) {
    return 1;
  }
  let result = [];
  for (i = 1; i <= n; i++) {
    let temp = i;
    result.push(temp);
  }
  return result.reduce((a, b) => a * b, 1);
}
