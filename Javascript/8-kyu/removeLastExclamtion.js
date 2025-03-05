function remove(string) {  
    //make a split ""
    //reverse
    //remove it with splice if indexOf==0
    //then return string
      let makeArray=string.split("").reverse()
    //   return makeArray.indexOf("!")
      for(let i=0;i<makeArray.length;i++){
       if(makeArray[i]!=="!"){
         break
       }
        makeArray.splice(i,1)
        i--
      }
      return makeArray.reverse().join("")
    
    }