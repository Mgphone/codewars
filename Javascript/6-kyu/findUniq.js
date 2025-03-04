function findUniq(arr) {
    // do magic
    //sort arr descending
    //check arr[0] and arr [1] not same arr[0]
  arr.sort()
   return arr[0]!==arr[1]?arr[0]:arr[arr.length-1]
  }