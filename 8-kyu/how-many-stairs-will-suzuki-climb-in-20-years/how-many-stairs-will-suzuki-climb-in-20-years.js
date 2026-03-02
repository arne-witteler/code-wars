function stairsIn20(s){
  const oneYearTotal = s
    .flat()
    .reduce((sum, n) => sum + n, 0);
​
  return oneYearTotal * 20;
}