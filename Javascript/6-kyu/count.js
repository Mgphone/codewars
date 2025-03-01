function count(string) {
 
    let result={}
    for(let i=0;i<string.length;i++){
  //     result[string[i]]
      if(result[string[i]]){
        result[string[i]]+=1
      }else{
        result[string[i]]=1
      }
    }
    return result
  }