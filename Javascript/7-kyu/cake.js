function cake(x, y) {
  // return "Fire"
  let total = 0;
  for (let i = 0; i < y.length; i++) {
    if (i % 2 == 0) {
      total += y[i].charCodeAt(0);
    } else {
      total += i + 1;
    }
  }
  console.log(total);

  return x * 0.7 > total ? "That was close!" : "Fire!";
}
