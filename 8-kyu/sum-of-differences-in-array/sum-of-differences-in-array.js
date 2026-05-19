function sumOfDifferences(arr) {
  const sortedArr = arr.sort((a, b) => b - a);
  
  if (arr.length < 2) {
    return 0;
  } else {
    return sortedArr[0]-sortedArr[arr.length-1];
  }
}