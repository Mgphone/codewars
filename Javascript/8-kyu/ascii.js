function uniTotal(string) {
  // total up dem unicodes!
  return string
    .split("")
    .map((a) => a.charCodeAt(0))
    .reduce((a, b) => a + b, 0);
}
