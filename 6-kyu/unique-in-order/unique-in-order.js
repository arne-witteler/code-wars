var uniqueInOrder=function(iterable) {
  //your code here - remember iterable can be a string or an array
  
  if (iterable instanceof String) {
    iterable.split("")
  }
  
  let list = [];
  
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i+1] != iterable[i]) {
      list.push(iterable[i]);
    }
  }
  return list;
}