String.prototype.toJadenCase = function () {
    //...
    const jadenWord=this
    const MakeItArray=this.split(" ")

    return MakeItArray.map(ele=>
                           ele.charAt(0).toUpperCase()
                           +ele.slice(1).toLowerCase()
                          ).join(" ")
  };