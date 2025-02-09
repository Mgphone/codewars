function isRubyComing(list) {
    // thank you for checking out my kata :)
    let changeArray= list.map(ele=>ele.language=="Ruby")
    return changeArray.includes(true)
  }