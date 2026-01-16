function powersOfTwo(n){
  const results = [];
  
  for (let i=0; i <= n; i++) {
    results.push(2 ** i);
  }
  return results;
}