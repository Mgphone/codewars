function cookie(x){
    // ...
    let typeInput= typeof x
  
    return typeInput==="string"?"Who ate the last cookie? It was Zach!":
   typeInput==="number"?"Who ate the last cookie? It was Monica!":
  "Who ate the last cookie? It was the dog!"
   
  }