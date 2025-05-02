function isSortedAndHow(array) {
  let minimum = Math.min(...array);
  let maximum = Math.max(...array);
  for (let i = 0; i < array.length; i++) {
    //     let minimum=array[i]
    //     let maximum=array[i]
    if (array[i] < array[i + 1] && array[i] <= minimum) {
      return "yes, ascending";
    } else if (array[i] > array[i + 1] && array[i] >= maximum) {
      return "yes, descending";
    } else return "no";
  }
}
