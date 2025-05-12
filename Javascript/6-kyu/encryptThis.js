var encryptThis = function (text) {
  // Implement me! :)
  //  let changeCode= text[0].charCodeAt(0)

  function decrpt(word) {
    let splitWord = word.split("");
    let insideWord = word[0].charCodeAt(0);
    if (word.length == 1) {
      return insideWord;
    } else if (word.length == 2) {
      return insideWord + splitWord[1];
    } else {
      let middle = splitWord.slice(2, splitWord.length - 1).join("");
      let result =
        insideWord + splitWord[splitWord.length - 1] + middle + splitWord[1];
      return result;
    }
  }
  let splitText = text.split(" ");
  let finalResult = [];
  for (let i = 0; i < splitText.length; i++) {
    finalResult.push(decrpt(splitText[i]));
  }
  return finalResult.join(" ");
};
