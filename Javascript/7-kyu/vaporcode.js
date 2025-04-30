function vaporcode(string) {
  return string.replaceAll(" ", "").toUpperCase().split("").join("  ");
}
