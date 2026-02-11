function sumDigits(number) {
  const strArr = number.toString().split("")
  const intArr = strArr.map(Number);
  
  let sum = 0;
  
  for (let i = 0; i < intArr.length; i++) {
    if (intArr[i] >= 0) {
      sum += intArr[i]
    }
  }
  return sum;
}
​