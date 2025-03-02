// write the function isAnagram
var isAnagram = function(test, original) {
    //make it lowecase and array
    let testArr=test.toLowerCase().split("").join("").split("")
    let originalArr=original.toLowerCase().split("").join("").split("")
  //   return originalArr.indexOf(testArr[0])
    if(testArr.length!==originalArr.length){
      return false
    }
    for(let i=0;i<testArr.length;i++){
      if(originalArr.indexOf(testArr[i])==-1){
        return false
      }else{
        originalArr.splice(originalArr.indexOf(testArr[i]),1)
      }
    }
    return true
  };