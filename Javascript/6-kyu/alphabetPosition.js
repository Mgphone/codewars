function alphabetPosition(originText) {
  //value of letter object
  //iterate if found will display
  const checkObj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  let result = "";
  let text = originText.toLowerCase();
  for (let i = 0; i <= text.length; i++) {
    if (checkObj[text[i]]) {
      result += checkObj[text[i]] + " ";
    }
  }
  return result.slice(0, result.length - 1);
}
