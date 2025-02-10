// Closure is a function remembers and use a value from outside its own function
function buildFun(n) {
  var res = [];

  for (let i = 0; i < n; i++) {
    res.push(function () {
      return i;
    });
  }
  return res;
}
//this is example
// function outerFunction() {
//     let secret = "I am hidden";

//     return function innerFunction() {
//       console.log(secret); // ✅ Can access secret
//     };
//   }
//console.log(secret)//that will come not defined b
//   const myClosure = outerFunction();
//   myClosure(); // "I am hidden"
