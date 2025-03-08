// First idea 
function expandedForm(num) {
    // Your code here
    //make split array
    //make empty string value
    //loop the array and if value zero length*10 will add
  
    
    let splitArray=num.toString().split("")
    let result=""
  //   return result+(splitArray[0]*10)
    for(let i=0;i<splitArray.length;i++){
      if(i<splitArray.length-1&&splitArray[i]>0){
        
      let temp=splitArray[i]*(Math.pow(10,((splitArray.length-1)-i)))
      result+=`${temp} + `
      }
      if(i===splitArray.length-1){
        if(splitArray[i]==0){
          let removePlusInd=result.lastIndexOf("+")
          let removeValue=result.slice(0,removePlusInd-1)
          return removeValue
          
        }
        result+= splitArray[i]
      }
    }
    return result
  }
  //second Idea
  function expandedForm(num) {
    // Your code here
    //change num to string array
    //get array index and then reverse
    //nested loop and take a result
    let makeArray= num.toString().split("")
  //   return makeArray
    let getIndex=makeArray.map((ele,i)=>10**i).reverse()
    console.log("makeArray"+makeArray)
    console.log("getIndex"+getIndex)
    let resultArray=[]
    for(let i=0;i<makeArray.length;i++){
  
      let temp=+makeArray[i]* Number(getIndex[i])
      resultArray.push(temp)
      
    }
  //   return resultArray
    let removeZeroResultArray=resultArray.filter(ele=>ele!==0).join(" + ")
    console.log(resultArray.filter(ele=>ele!==0).join(" + "))
    return removeZeroResultArray
    }