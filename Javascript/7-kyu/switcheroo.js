function switcheroo(x) {
  // let result=""
  return x
    .split("")
    .map((ele, i) => {
      if (ele == "a") {
        return "b";
      } else if (ele == "b") {
        return "a";
      } else {
        return ele;
      }
    })
    .join("");
}
