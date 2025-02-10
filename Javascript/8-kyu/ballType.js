// call again new object will come but no need new
var Ball = function (arg = "regular") {
  // your code goes here
  return { ballType: arg };
};
console.log(Ball().ballType);

// //this is using by constructor
// var Ball = function (ballType) {
//   this.ballType = ballType || regular;
// };
// console.log(new Ball().ballType)
// // this and new to get constructor
