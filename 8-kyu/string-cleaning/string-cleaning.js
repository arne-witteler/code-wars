function stringClean(s) {
  const arr = s.split("")
  
  const solution = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= "0" && arr[i] <= "9") {
    } else
      solution.push(arr[i])
  }
  return solution.join("");
}