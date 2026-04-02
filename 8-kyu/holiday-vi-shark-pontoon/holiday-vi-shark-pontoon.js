function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  
  const timeYou = pontoonDistance / youSpeed;
  let timeShark = sharkDistance / sharkSpeed;
  
  if (dolphin) {
    timeShark *= 2;
  }
  
  if (timeYou < timeShark) {
    return "Alive!";
  } else {
    return "Shark Bait!";
  }
  
}