function doubleChar(str) {
  const strToArr = str.split('');
  const doubledChars = strToArr.map(char => char.repeat(2));
  return doubledChars.join(''); 
}
​