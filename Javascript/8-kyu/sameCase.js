function sameCase(a, b){
    let regex=/[a-zA-Z]/
    if(!regex.test(a)||!regex.test(b)){
      return -1
    }else if(a==a.toLowerCase()&&b==b.toLowerCase()||a==a.toUpperCase()&&b==b.toUpperCase()){
      return 1
    }else{
      return 0
    }
  }