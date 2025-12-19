function stray(numbers) {
  const sortedNum = numbers.sort()
  
  if (sortedNum[0] == sortedNum[1]) {
    return sortedNum[numbers.length - 1]
  } else {
    return sortedNum[0];
  }
}