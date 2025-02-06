function cubeOdd(arr) {
  // insert code here >.<
  let value = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return undefined;
    } else if (arr[i] % 2 !== 0) {
      let temp = arr[i];
      value += temp ** 3;
      //     value.push(temp)
    }
  }
  return value;
  //   return value.reduce((a,b)=>a+b**3,0)
}
