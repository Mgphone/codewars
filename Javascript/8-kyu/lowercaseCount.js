function lowercaseCount(str){
    //How many?
      let regex=/[a-z]/
      let count=0
  for(let i=0;i<str.length;i++){
    if(regex.test([str[i]])){
      count+=1
    }
  }
  return count
}