function shortenToDate(longDate) {
    // your code here
    let lastInd=longDate.lastIndexOf(",")
    return longDate.substring(0,lastInd)
    
  }