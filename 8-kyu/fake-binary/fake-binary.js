function fakeBin(x){
  const arrX = x.split('');
  
  for (i = 0; i < arrX.length; i++) {
    if (arrX[i] < parseInt("5")) {
      arrX[i] = "0";
    } else
      arrX[i] = "1"
  }
  return arrX.join('');
}