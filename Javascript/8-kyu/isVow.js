function isVow(a) {
  //   return a // your code here
  let vowels = { 97: "a", 101: "e", 105: "i", 111: "o", 117: "u" };
  let results = [];
  //   return vowels[97]
  for (let i = 0; i < a.length; i++) {
    if (a[i] in vowels) {
      results.push(vowels[a[i]]);
    } else {
      results.push(a[i]);
    }
  }
  return results;
}
