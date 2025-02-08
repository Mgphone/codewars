function validatePIN(pin) {
  console.log(pin);
  let array = [...pin];
  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i]) || array[array.length - 1] == "\n") {
      return false;
    }
  }
  if (array.length == 4 || array.length == 6) {
    return true;
  } else {
    return false;
  }
}
