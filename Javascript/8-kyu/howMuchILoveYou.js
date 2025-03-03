function howMuchILoveYou(nbPetals) {
    // your code
  let result=nbPetals%6
  if(result==0){
    result=6
  }
  
  let value={
    "1":"I love you",
    "2":"a little",
    "3":"a lot",
    "4":"passionately",
    "5":"madly",
    "6":"not at all"

  }
  return value[result]
}