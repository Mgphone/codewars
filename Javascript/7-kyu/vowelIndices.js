function vowelIndices(word){
    //your code here
    //store vowel
    //empty array (result)
    //loop 
    //if found vowel add +1 to get index
    let vowels="aeiouAEIOUyY"
    let result=[]
  //   return vowel.includes("a")
   for(let i=0;i<word.length;i++){
     if(vowels.includes(word[i])){
      result.push(i+1)
     }
   }
    return result
  }