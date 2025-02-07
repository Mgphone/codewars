function getMiddle(s) {
  //Code goes here!
  //   return s[1]
  let oddNumber = Math.floor(s.length / 2);
  let evenNumber = s.length - Math.floor(s.length / 2);
  if (s.length % 2 == 0) {
    let temp = s[evenNumber - 1] + s[evenNumber];
    return temp;
  } else {
    return s[oddNumber];
  }
}
