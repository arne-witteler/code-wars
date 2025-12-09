var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears;
  let dogYears;
  
  if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;    
  } else if (humanYears === 2) {
    catYears = 24;
    dogYears = 24;
  } else {
    catYears = 24 + 4 * (humanYears - 2);
    dogYears = 24 + 5 * (humanYears - 2);
  }
  
  return [humanYears,catYears,dogYears];
}
​