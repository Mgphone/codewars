function uniqueSum(lst) {
  //your magic code goes here
  let arrayList = lst.sort((a, b) => a - b);
  let newArray = [];
  for (let i = 0; i < arrayList.length; i++) {
    if (arrayList[i] !== arrayList[i + 1]) {
      newArray.push(arrayList[i]);
    }
  }
  return newArray.length > 0 ? newArray.reduce((a, b) => a + b, 0) : null;
}
