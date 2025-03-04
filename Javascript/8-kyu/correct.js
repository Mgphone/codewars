function correct(string)
{
	// your code here
  let makeArr=string.split("")
  let newMakeArr=[]
//   return makeArr
  for(i=0;i<makeArr.length;i++){
    if(makeArr[i]=="5"){
      let temp="S"
      newMakeArr.push(temp)
    }else if(makeArr[i]=="0"){
      let temp="O"
      newMakeArr.push(temp)
    }else if(makeArr[i]=="1"){
      let temp="I"
      newMakeArr.push(temp)
    }else{
      newMakeArr.push(makeArr[i])
    }
  }
  return newMakeArr.join("")
}