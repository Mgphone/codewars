String.prototype.digit = function() {
    let regex=/^[0-9]$/
    return regex.test(this)
  };