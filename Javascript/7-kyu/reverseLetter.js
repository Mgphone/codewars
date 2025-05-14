function reverseLetter(str) {
  //coding and coding..
  let regex = /[\W\d]/;
  let newArray = [];
  for (let i = 0; i < str.length; i++) {
    if (!regex.test(str[i]) && str[i] !== "_") {
      newArray.push(str[i]);
    }
  }
  return newArray.reverse().join("");
}
