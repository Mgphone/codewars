var number = function (array) {
  //your awesome code here
  return array.map((ele, ind) => {
    return `${ind + 1}: ${ele}`;
  });
};
