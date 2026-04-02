function numberToPower(number, power){
  console.info(Math.log2(1024));
  
  if (power == 0) {
    return 1;
  }
    
  let sol = number;
  
  
  for (let i = 0; i < power -1; i++) {
    sol *= number;
  }
  return sol;
}