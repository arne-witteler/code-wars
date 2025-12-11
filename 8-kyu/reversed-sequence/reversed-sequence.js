const reverseSeq = n => {
  
  const m = [];
  
  for (i= n; i > 0; i--) {
    m.push(n);
    n = n-1;
  }
  return m;
};