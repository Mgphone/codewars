function bump(x) {
  let result = 15;
  for (let i = 0; i < x.length; i++) {
    if (x[i] == "n") {
      result -= 1;
    }
  }
  return result < 0 ? "Car Dead" : "Woohoo!";
}
