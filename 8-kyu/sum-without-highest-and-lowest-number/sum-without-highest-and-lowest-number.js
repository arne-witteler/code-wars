function sumArray(array) {
  if (!Array.isArray(array) || array.length <= 2) {
    return 0;
  }
​
  const sortedArr = [...array].sort((a, b) => a - b);
  let sum = 0;
​
  for (let i = 1; i < sortedArr.length - 1; i++) {
    sum += sortedArr[i];
  }
​
  return sum;
}