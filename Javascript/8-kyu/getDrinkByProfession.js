function getDrinkByProfession(param) {
  //make object and will call
  const drinkByProfession = {
    jabroni: "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    programmer: "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    politician: "Your tax dollars",
    rapper: "Cristal",
    default: "Beer",
  };
  return drinkByProfession[param.toLowerCase()]
    ? drinkByProfession[param.toLowerCase()]
    : "Beer";
}
