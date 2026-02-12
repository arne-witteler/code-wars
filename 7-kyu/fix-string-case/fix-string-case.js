function solve(s) {
  
  let lc = 0;
  let uc = 0;
  
  for(let i = 0; i < s.length; i++) {
    if (s.at(i) == s.at(i).toLowerCase()) {
      lc += 1;
    } else
      uc += 1;
  }
  if (lc >= uc) {
    return s.toLowerCase();
  } else
    return s.toUpperCase();
}