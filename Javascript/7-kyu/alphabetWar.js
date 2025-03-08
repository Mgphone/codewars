function alphabetWar(fight)
{
  //store left and right data on two object
  //leftSide value
  //rightSide Value
  //check who's win
  let leftSide={"w":4,"p":3,"b":2,"s":1}
  let rightSide={"m":4,"q":3,"d":2,"z":1}
 
  function calculateTotal(check,valueObj){
    let totalResult=0
    let checkArray=check.split("")
    for(let i=0;i<checkArray.length;i++){
      if(valueObj.hasOwnProperty(checkArray[i])){
      totalResult+=valueObj[checkArray[i]]
      }
    }
    return totalResult
  }
   let leftValue=calculateTotal(fight,leftSide)
  let rightValue=calculateTotal(fight,rightSide)
  return leftValue>rightValue?"Left side wins!":
          leftValue<rightValue? "Right side wins!": "Let's fight again!" 
  
}