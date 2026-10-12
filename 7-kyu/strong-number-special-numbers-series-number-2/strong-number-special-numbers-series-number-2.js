function strong(n) {
  
  const numberArray = Array.from(String(n), Number);
  let sum = 0;
  
  function factorialize(num) {
    if (num < 0) {
      return -1;
    } else if (num == 0) {
      return 1;
    } else {
      return (num * factorialize(num -1));
    }
  }
  
  for (let i = 0; i < numberArray.length; i++) {
    sum += factorialize(numberArray[i]);
  }
​
  
  return sum == n ? "STRONG!!!!" : "Not Strong !!" ;
}