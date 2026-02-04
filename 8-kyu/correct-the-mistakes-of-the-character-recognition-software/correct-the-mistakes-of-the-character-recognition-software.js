function correct(string) {
  
  const arr = string.split("")
  
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "5":
        arr[i] = "S"
        break;
      case "0":
        arr[i] = "O"
        break;
      case "1":
        arr[i] = "I"
        break;
      default:
        }
  }
    return arr.join("");
}