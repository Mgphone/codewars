function minValue(values) {
  //your code here
  let sortFilt = values.filter((ele) => ele <= 9).sort();
  let result = [];
  for (let i = 0; i < sortFilt.length; i++) {
    if (sortFilt[i] !== sortFilt[i + 1]) {
      result.push(sortFilt[i]);
    }
  }
  return +result.join("");
}
