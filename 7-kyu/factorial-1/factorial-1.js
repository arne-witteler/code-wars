function factorial(n) {
  
  let product = 1;
  
  for (let i = 0; i < n; i++) {
    product *= n - i;
  }
  return product;
}