var capitals = function (word) {
  // Write your code here
  //make empty array
  //i will iterate the word
  //if there is capital letter will add to the empty array
  let result = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] == word[i].toUpperCase()) result.push(i);
  }
  return result;
};
