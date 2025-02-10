function spEng(sentence) {
  //write your code here
  //make lower case
  //join to one word
  //find index not equal with -1
  let makeLowerCase = sentence.toLowerCase();
  let joinOneWord = makeLowerCase.replaceAll(" ", "");
  return joinOneWord.indexOf("english") !== -1;
}
