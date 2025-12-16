function calculateYears(principal, interest, tax, desired) {
  let y = 0;
  
  if (principal == desired) return 0;
  
  while (principal < desired) {
    principal = principal + principal * interest - (principal * interest * tax);
    y += 1;
    
  }
  return y;
​
}
​