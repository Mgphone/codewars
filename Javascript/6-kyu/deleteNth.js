function deleteNth(arr,n){

    // 1. i will iterate the array 
    // 2.make new empty array
    //i will add the checker object array
    // 3.before adding the array i will check the itrate ele < n will add 
      console.log(arr)
      let result=[]
      let temp={}
    
      for(let i=0;i<arr.length;i++){
        
         temp[arr[i]] = temp[arr[i]] ? temp[arr[i]] + 1 : 1;
        
         if (temp[arr[i]] <= n) {
          result.push(arr[i]);
        }
    
      }
      return result
      
    }