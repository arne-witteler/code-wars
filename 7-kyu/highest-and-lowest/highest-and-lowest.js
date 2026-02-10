function highAndLow(numbers){
  const sortedArr = numbers.split(" ").sort((a, b) => a - b)
  const highestNumber = sortedArr[sortedArr.length-1];
  const lowestNumber = sortedArr[0];
  
  return "" + highestNumber + " " + lowestNumber + ""
}