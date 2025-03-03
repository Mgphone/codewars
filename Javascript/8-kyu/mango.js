function mango(quantity, price){
    if(quantity<2){
      return quantity*price
    }else{
      let reducePrice=Math.floor(quantity/3)*price
      return ((quantity*price)-reducePrice)
    }
    }