function menFromBoys(arr) {
  //your code here
  let even = [];
  let odd = [];
  arr.map((ele) => {
    if (ele % 2 === 0) {
      even.push(ele);
    } else {
      odd.push(ele);
    }
  });
  odd.sort((a, b) => b - a);
  even.sort((a, b) => a - b);
  return [...new Set(even), ...new Set(odd)].flat();
}
