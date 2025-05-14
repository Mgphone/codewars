const orderedCount = function (text) {
  // Implement me!

  let result = {};
  let order = [];
  let splitText = text.split("");

  for (let i = 0; i < splitText.length; i++) {
    if (!result[splitText[i]]) {
      result[splitText[i]] = 1;
      order.push(splitText[i]);
    } else {
      result[splitText[i]] += 1;
    }
  }
  return order.map((ele) => [ele, result[ele]]);
};
