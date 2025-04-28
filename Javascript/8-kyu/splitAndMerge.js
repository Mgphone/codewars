function splitAndMerge(string, separator) {
  return string
    .split(" ")
    .map((ele) => ele.split("").join(separator))
    .join(" ");
}
