function divCon(x) {
  //make 2 filters array
  //change to number
  //find total
  //will minus
  let intVal = x.filter((a) => typeof a == "number").reduce((a, b) => a + b, 0);
  let strVal = x
    .filter((a) => typeof a !== "number")
    .map((a) => +a)
    .reduce((a, b) => a + b, 0);
  return intVal - strVal;
}
