String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  let givePara = this.split("");
  let newResult = [];
  for (let i = 0; i < givePara.length; i++) {
    if (givePara[i] == givePara[i].toLowerCase()) {
      newResult.push(givePara[i].toUpperCase());
    } else {
      newResult.push(givePara[i].toLowerCase());
    }
  }
  return newResult.join("");
};
