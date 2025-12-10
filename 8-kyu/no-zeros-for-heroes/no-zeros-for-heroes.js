function noBoringZeros(n) {
  str = n.toString();
  
  if (str == 0) {
    return parseInt(str);
  } 
  
  while (str.charAt(str.length - 1) === "0") {
    str = str.substring(0, str.length - 1);
  }
  return parseInt(str);
}
​