function sortMyString(S) {
  let even = [];
  let odd = [];
  let arr = S.split("");
  
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return even.join("") + " " + odd.join("");
}