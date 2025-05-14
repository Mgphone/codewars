function aliasGen(first, last) {
  // Code Here
  let myFirst = first.split("")[0];
  let myLast = last.split("")[0];
  const regex = /\d/g;
  if (!myFirst.match(regex) && !myLast.match(regex)) {
    let temp1 = firstName[myFirst.toUpperCase()];
    let temp2 = surname[myLast.toUpperCase()];
    return temp1 + " " + temp2;
  } else {
    return "Your name must start with a letter from A - Z.";
  }
}
