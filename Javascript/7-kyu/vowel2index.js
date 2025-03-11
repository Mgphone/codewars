function vowel2index(str) {
    //code me
   let checker="aeiou"
   let result=""
 //   return checker.includes("a")
   for(let i=0;i<str.length;i++){
     if(checker.includes(str[i].toLowerCase())){
       
       result+=i+1
     }else{
       
     result+=str[i]
     }
   }
   return result
 }