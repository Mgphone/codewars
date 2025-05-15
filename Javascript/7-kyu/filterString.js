function filterString(value) {
  //Complete this function :)
  let regex = /\d/;
  return +value
    .split("")
    .filter((ele) => regex.test(ele))
    .join("");
}
