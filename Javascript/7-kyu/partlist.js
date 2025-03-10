function partlist(arr) {
    // your code
  let result=[]
  for(let i=0;i<arr.length-1;i++){
    let temp=[]
    let firstPart=arr.slice(0,i+1).join(" ")
    let secondPart=arr.slice(i+1).join(" ")
    temp.push(firstPart)
    temp.push(secondPart)
    result.push(temp)
     
  }
  return result
  
}