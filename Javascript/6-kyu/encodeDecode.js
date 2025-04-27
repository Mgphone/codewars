//add decode
//add encode
let encodeObj = { a: 1, e: 2, i: 3, o: 4, u: 5 };
let decodeObj = { 1: "a", 2: "e", 3: "i", 4: "o", 5: "u" };
function encode(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (encodeObj[string[i]]) {
      result += encodeObj[string[i]];
    } else {
      result += string[i];
    }
  }
  return result;
}

function decode(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (decodeObj[string[i]]) {
      result += decodeObj[string[i]];
    } else {
      result += string[i];
    }
  }
  return result;
}
