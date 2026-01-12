function mergeArrays(arr1, arr2) {
  const mergedArr = arr1.concat(arr2);
  
  const filteredArr = mergedArr.filter((item, index) => mergedArr.indexOf(item) === index);
  
  const sortedArr = filteredArr.sort((a, b) => a - b);
  
  return sortedArr;
}