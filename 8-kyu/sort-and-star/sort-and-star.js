function twoSort(s) {
  return s
    .slice()
    .sort()
    [0]
    .split('')
    .join('***');
​
}