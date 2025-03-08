function sumOfDifferences(arr) {
    //   return (3-2)+(2-1)
      let sortAssending=arr.sort((a,b)=>b-a)
    
      let total=0
      if(sortAssending.length<=1){return total}
      for(let i=0;i<sortAssending.length-1;i++){
        let temp=sortAssending[i]-sortAssending[i+1]
        total+=temp
      }
      return total
      }