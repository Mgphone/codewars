function high(x){
    //firstly store the value of a-z in object
    //use with split and make it value of individual 
    //show the higest word 
    //if the same show the first one
    let checkValue={}
    for(let i=0;i<26;i++){
      let temp=String.fromCharCode(97+i)
      checkValue[temp]=i+1
    }
    let splitValue=x.split(" ")
    let numberValue=splitValue.map(ele=>{
      let temp=ele.split("")
      return temp.reduce((a,b)=>a+checkValue[b],0)
    })  
    let findInd=numberValue.indexOf(Math.max(...numberValue))
    return splitValue[findInd]
  
  }