function sameCase(a, b) {
  if (!/[a-z]/i.test(a) || !/[a-z]/i.test(b)) {
    return -1;
  }
​
  if (
    (a === a.toLowerCase() && b === b.toLowerCase()) ||
    (a === a.toUpperCase() && b === b.toUpperCase())
  ) {
    return 1;
  }
​
  return 0;
}