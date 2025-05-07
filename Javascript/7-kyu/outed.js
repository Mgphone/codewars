function outed(meet, boss) {
  let bossValue = meet[boss];
  let meetValue = Object.values(meet);
  let averageValue =
    meetValue.reduce((a, b) => a + b, bossValue) / meetValue.length;
  return averageValue <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}
