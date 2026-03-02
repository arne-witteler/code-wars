function lowercaseCount(str) {
  const matches = str.match(/[a-z]/g);
  return matches ? matches.length : 0;
}