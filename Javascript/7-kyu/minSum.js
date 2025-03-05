function minSum(arr) {
    // your code here
  //sort it
    //loop only half 
    //add total
    arr.sort((a,b)=>b-a)
  //   console.log(arr)
  //   return arr[arr.length-1]
    let total=0
    let middle=Math.floor(arr.length/2)-1
  console.log(middle)
    for (let i=0;i<=middle;i++){
      let temp=arr[i]*arr[(arr.length-1)-i]
      total+=temp
    }
    return total
  }