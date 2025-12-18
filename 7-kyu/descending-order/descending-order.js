function descendingOrder(n){
  const str = n + "";
  const sortedStr = str.split('').sort().reverse().join('');
  return parseInt(sortedStr);
}