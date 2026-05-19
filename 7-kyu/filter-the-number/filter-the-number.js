function filterString(value) {
  const arr = value.split("");
  
  const filteredNumbers = []
  
  for (i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && arr[i] !== " ") {
      filteredNumbers.push(arr[i])
    }
  }
  return parseInt(filteredNumbers.join(""));
}