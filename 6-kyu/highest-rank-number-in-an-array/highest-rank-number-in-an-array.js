function highestRank(arr) {
  
  const count = {};
  
  arr.forEach(item => { count[item] = (count[item] || 0) + 1; });
  
  const sort = Object.entries(count).sort((a, b) => {
    if (b[1] !== a[1]) {
      return b[1] - a[1]; 
    } return Number(b[0]) - Number (a[0]);
  });
  
  return Number(sort[0][0]);
}