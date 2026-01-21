function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  const arr = str.split("");
  
  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      count += 1;
    }
  }
  return count;
}
​