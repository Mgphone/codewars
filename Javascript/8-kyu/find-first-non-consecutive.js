// function firstNonConsecutive(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i + 1] - arr[i] !== 1) {
//       return arr[i + 1];
//     }
//   }
//   return null;
// }
function firstNonConsecutive(arr) {
  //length less than 1 will return null
  // iterate arr and will find the consecutive letter
  //if found show the letter , not i will display null
  if (arr.length <= 1) {
    return null;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      return arr[i + 1];
    }
  }
  return null;
}
