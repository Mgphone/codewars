function multiplicationTable(size) {
    //make first array with size
    //loop and push multiple array value and add
    let firstArr=[]
    let result=[]
    for(let i=1;i<size+1;i++){
      firstArr.push(i)
    }
  for(let i=1;i<size+1;i++){
    let temp=firstArr.map(ele=>ele*i)
    result.push(temp)
  }
   return result
  }