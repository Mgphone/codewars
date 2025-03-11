function isAlt(word) {
    // happy codinggg
    let vowel="aeiou"
    let makeArray=word.split("")
    let checkFirst=vowel.includes(makeArray[0])
    for(let i=1;i<makeArray.length;i++){
      if(checkFirst==vowel.includes(makeArray[i])){
        return false
      }
      checkFirst=vowel.includes(makeArray[i])
    }
    return true
  }