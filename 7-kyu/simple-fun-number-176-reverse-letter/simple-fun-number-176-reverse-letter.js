function reverseLetter(str) {
  let arr = str.split("")
  
  arr = arr.filter(item => item >= "a" && item <= "z" );
  
  return arr.reverse().join("");
}