function sumMix(x){
  let sum = 0;
    for (let i = 0; i < x.length; i++) {
      const strToInt = parseInt(x[i]);
      sum += strToInt;
  }
  return sum;
}