function nbDig(n, d) {
​
  let count = 0;
  let dString = d.toString();
​
  for (let i = 0; i <= n; i++) {
    let square = i * i;
    let squareString = square.toString();
​
    let parts = squareString.split(dString);
    count += parts.length - 1
  }
​
  return count;
}