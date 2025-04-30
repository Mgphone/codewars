function parseF(s) {
  let change = parseFloat(s);
  if (isNaN(change)) {
    return null;
  } else {
    return change;
  }
}
