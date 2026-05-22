function solve(arr) {
  const revArr = arr.reverse();
  const newArr = [];
  
  for (let i = 0; i < revArr.length; i++) {
    if (!newArr.includes(revArr[i])) {
      newArr.push(revArr[i]);
    }
  }
  return newArr.reverse();
}