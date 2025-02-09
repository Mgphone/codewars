function expressionMatter(a, b, c) {
  let first = a * (b + c);
  let second = a * b * c;
  let third = a + b * c;
  let fourth = (a + b) * c;
  let fifth = a * b + c;
  let sixth = a + b + c;
  let maxNumber = Math.max(first, second, third, fourth, fifth, sixth);
  return maxNumber;
}
