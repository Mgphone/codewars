function toCsvText(array) {
    // good luck
 //   return array.map(ele=>`${ele}\n+`)
   let result=""
   for(let i=0;i<array.length;i++){
     result+=`${array[i]}\n`
   }
   return result.slice(0,result.lastIndexOf("\n"))
 }