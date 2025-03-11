function solution(str, ending){
    // TODO: complete
  //   return str.endsWith(ending)
    let lastWord= str.slice((str.length)-ending.length)
    return lastWord===ending
  }