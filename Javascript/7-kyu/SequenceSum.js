var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      // for
        //while
      if(count<0){
        return `${count}<0`
      }else if(count==0){
        return `0=0`
      }else{
        let total=0
        let stringValue=""
        for(let i=0;i<=count;i++){
          total+=i
          stringValue+=i+"+"
          
        }
        let value= stringValue.slice(0,stringValue.lastIndexOf("+"))
        return `${value} = ${total}`
      }
    };
  
    return SequenceSum;
  
  })();