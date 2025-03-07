function rowWeights(array){
    //your code here
    //two variable
    let first=0
    let second=0
    for(let i=0;i<array.length;i++){
      if(i%2==0){
        first+=array[i]
      }else{
        second+=array[i]
      }
    }
    return [first,second]
  }