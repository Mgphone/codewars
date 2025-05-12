function incrementer(nums) {
  // code goes here
  let checker = nums.map((didg, i) => {
    return (didg + i + 1) % 10;
  });
  return checker;
}
