function sumCubes(n){
    // ...
    //make total result
    //loop the
    let total=0
    for(let i=0;i<n+1;i++){
      if(i<=n){
        let temp=i*i*i
        total+=temp
      }
    }
    return total
    
  }