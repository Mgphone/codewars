function solve(a) {
  let even = a.filter((ele) => ele % 2 == 0).length;
  let odd = a.filter((ele) => ele % 2 !== 0 && typeof ele == "number").length;

  return even - odd;
}
