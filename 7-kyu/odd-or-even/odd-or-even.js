function oddOrEven(array) {
   const start = 0;
   const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, start,);
  
  return sum % 2 == 0 ? "even" : "odd";
}