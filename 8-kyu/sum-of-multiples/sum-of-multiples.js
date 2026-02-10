function sumMul(n,m) {
  
  let sum = 0;
  
  if (n <= 0 || m <= 0) {
    return "INVALID";
  } else {
    for (let i = 1; i <= m; i++) {
      if (n*i < m) {
        sum += n*i
      }
    }
    return sum;
  }
}