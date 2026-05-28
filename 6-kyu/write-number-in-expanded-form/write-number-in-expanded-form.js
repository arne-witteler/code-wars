function expandedForm(num) {
  const strArr = String(num).split("");
  const result = [];
  
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== "0") {
      const zerosCount = strArr.length - 1 - i;
      
      result.push(strArr[i] + "0".repeat(zerosCount));
    }
  }
  
  return result.join(" + ");
}