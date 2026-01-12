function findAverage(nums) {
  
  const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue,
  0);
  
  return sum / nums.length; 
}