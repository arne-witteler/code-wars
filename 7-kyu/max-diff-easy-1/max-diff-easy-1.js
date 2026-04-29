function maxDiff(list) {
  if (list.length <=1) {
    return 0;
  } else {
    const sortedList = list.sort((a, b) => a - b)
    
    return sortedList[sortedList.length-1] - sortedList[0];
  }
};