function SeriesSum(n) {
    // Happy Coding ^_^
    //1/1 and 1/4 and 1/7
    if (n===0){return "0.00"}
    let total=0
    for(let i=0;i<n;i++){
     total+=(1/((i*3)+1))
    }
    return total.toFixed(2).toString()
  }