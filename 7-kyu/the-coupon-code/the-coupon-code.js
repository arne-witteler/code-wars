function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  
  const cDate = new Date(currentDate);
  const eDate = new Date(expirationDate);
  
  
  if (enteredCode === correctCode && cDate <= eDate) {
    return true;
  } else
    return false;
}