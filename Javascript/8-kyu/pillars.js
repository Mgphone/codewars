function pillars(numPill, dist, width) {
    // your code here
  
  //   if(numPill<=1){return 0}
  //  let total=(numPill - 1) * (dist * 100) + (numPill - 2) * width;
  //  return total
    let numofPill=numPill-1
    let distance=(dist*numofPill)*100
    let countWidth=numPill>2?width*(numPill-2):0
    return distance+countWidth
    
   
  }