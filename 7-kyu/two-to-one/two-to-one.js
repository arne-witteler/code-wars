function longest(s1, s2) {
  let combined = s1 + s2;
  const arr = [...new Set(combined)];
  
  return arr.sort().join("");
}