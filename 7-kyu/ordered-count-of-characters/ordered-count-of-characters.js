const orderedCount = function (text) {
  
  const result = [];
  const arr = text.split("");
  
  for (i = 0; i < arr.length; i++) {
    const inArr = result.find(element => element[0] === arr[i]);
    
    if (inArr) {
      inArr[1] += 1;
    } else
      result.push([arr[i], 1]) 
  }
  return result;
}