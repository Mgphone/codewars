function stringClean(s) {
  // Function will return the cleaned string
  //loop the whole s
  //if it is number remove it
  //back to normal string
  //   let regex=/[0-9]/g
  //   return s.replaceAll(regex,"")
  let value = "";
  for (let i = 0; i < s.length; i++) {
    //need to check not only number but also space
    if (isNaN(s[i]) || s[i] == " ") {
      value += s[i];
    }
  }
  return value;
}
