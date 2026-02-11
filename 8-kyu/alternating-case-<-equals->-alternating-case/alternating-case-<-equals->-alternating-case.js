String.prototype.toAlternatingCase = function () {
  const strToArr = this.split("")
  
  const newArr = [];
  
  for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[i] === strToArr[i].toLowerCase()) {
      newArr.push(strToArr[i].toUpperCase())
    } else {
      newArr.push(strToArr[i].toLowerCase())
    }
  }
  return newArr.join("");
}