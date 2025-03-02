function findOutlier(integers){
    //your code here
    //make evenarr
    //make oddarr
    //find the lowest and output it
    let evenArr=[]
    let oddArr=[]
    integers.map(ele=>{
                 if(ele%2==0){
      evenArr.push(ele)
    }else{
      oddArr.push(ele)
    }
    }
     
                )
                return evenArr.length>oddArr.length?+oddArr.join(""):+evenArr.join("")
  }