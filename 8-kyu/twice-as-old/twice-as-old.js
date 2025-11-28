function twiceAsOld(dadYearsOld, sonYearsOld) {
  const years = dadYearsOld - 2 * sonYearsOld;
  
  if (years > 0) {
    return years;
  } else 
    return -years;
}