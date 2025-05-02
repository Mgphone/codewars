function calculateTip(amount, rating) {
  let checker = { terrible: 0, poor: 5, good: 10, great: 15, excellent: 20 };
  if (checker.hasOwnProperty(rating.toLowerCase())) {
    let perce = checker[rating.toLowerCase()];

    let result = Math.ceil((perce / 100) * amount);
    return result;
  } else {
    return "Rating not recognised";
  }
}
