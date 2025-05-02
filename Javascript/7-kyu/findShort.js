function findShort(s) {
  let splitS = s.split(" ");
  return Math.min(...splitS.map((ele) => ele.length));
}
