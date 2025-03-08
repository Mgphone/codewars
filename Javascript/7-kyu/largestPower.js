function largestPower(n){
    //   return n// return the largest integer k such that 3^k < n
      let total=0
      for(let i=0;i<n;i++){
        if((3**i)<n){
          total+=1
        }else{
          
        break
        }
      }
      return total-=1
    }