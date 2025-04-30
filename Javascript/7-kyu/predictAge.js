function predictAge(...ages) {
  // your code
  return Math.floor(
    Math.sqrt(ages.map((ele) => ele * ele).reduce((a, b) => a + b, 0)) / 2
  );
}
