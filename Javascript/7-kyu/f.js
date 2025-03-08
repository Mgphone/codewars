function f(x, cc) { 
    return x==cc.a?cc.b
      :x==cc.b?cc.c
      :x==cc.c?cc.a:"nothing"
  }