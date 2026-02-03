function getSum(a, b) {
  let sum = 0;
  let start, end;
  
  if (a < b) {
    start = a;
    end = b;
    
  } else {
    start = b;
    end = a;
  }
  
  for (let i = start; i <= end; i++) {
       sum += i;
     }
     return sum;
  }