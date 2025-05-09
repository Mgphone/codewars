function automorphic(n) {
  let nPow = Math.pow(n, 2).toString();
  let letVal = nPow.slice(-n.toString().length);
  let result = n.toString() == letVal;

  return result ? "Automorphic" : "Not!!";
}
