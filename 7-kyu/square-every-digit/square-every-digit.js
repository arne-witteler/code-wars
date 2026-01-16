function squareDigits(num){
  const arr = Array.from(String(num), Number);
  const mapped = arr.map((x) => x * x);
  return parseInt(mapped.join(""));
}