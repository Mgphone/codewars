function whoIsPaying(name){
    //your code here
    let splitName=name.split("")
    let result=[]
    for(let i=0;i<2;i++){
      result.push(splitName[i])
    }
    if(name.length==0){return [""]}
    if (name.length<=2){return [name]}
    return [name,result.join("")]
  }