function remove(s,n){
    //coding and coding....
    //make it array
    //temp number default to zero
    //while loop n is higer than default zero
    //
    let makeArray=s.split("")
    let count=0
    while(n>count){
      let findInd=makeArray.indexOf("!")
      if(findInd==-1){
        break
      }
      makeArray.splice(findInd,1)
      count++
    }
    return makeArray.join("")
  }