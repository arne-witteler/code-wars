function reverseWords(str) {
  const arr = str.split(" ");
  
  let revArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    revArr.push(
      arr[i].split("").reverse().join("")
    );
  }
  
  return revArr.join(" ");
}