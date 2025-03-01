function wordsToMarks(string){
    //your code here
    //make a to z value
    //loop string and find it 
    //if found add to total value
    let valueObj={}
    let total=0
    for(let i=0;i<26;i++){
      let key=String.fromCharCode(97+i)
      valueObj[key]=i+1
    }
    for(let i=0;i<string.length;i++){
      total+=valueObj[string[i]]
    }
    return total
   
  }