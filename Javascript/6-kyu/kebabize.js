function kebabize(str) {
  // TODO
  //remove number on the str
  //if found capital letter iterate and will add "-" and lowercase
  //if found number add "-"in both
  let result = "";
  for (let j = 0; j < str.length; j++) {
    if (!isNaN(+str[j])) {
      //       result+="-"+str[j]+"-"
    } else if (str[j].toUpperCase() == str[j]) {
      result += "-" + str[j].toLowerCase();
    } else {
      result += str[j];
    }
  }
  let removDash = result[0] == "-" ? result.slice(1, result.length) : result;
  return removDash;
}
