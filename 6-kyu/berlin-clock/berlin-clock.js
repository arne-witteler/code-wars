function berlinClock(time) {
  const [hours, minutes, seconds] = time.split(":");
  
  const h = Number(hours);
  const m = Number(minutes);
  const s = Number(seconds);
  
  let berlinTime = "";
  let fiveHours = Math.floor(h / 5);
  let oneHours = h % 5;
  let fiveMinutes = Math.floor(m / 5);
  let oneMinutes = m % 5;
  
  if (s % 2 === 0) {
    berlinTime += "Y";
  } else {
    berlinTime += "O";
  }
  berlinTime += "\n"
  
  berlinTime += "R".repeat(fiveHours) + "O".repeat(4 - fiveHours);
​
  berlinTime += "\n"
  
  berlinTime += "R".repeat(oneHours) + "O".repeat(4 - oneHours);
​
  berlinTime += "\n"
  
  for (let i = 1; i <= 11; i++) {
    if (i <= fiveMinutes) {
      if (i % 3 === 0) {
        berlinTime += "R";
      } else {
        berlinTime += "Y";
      }
    } else {
      berlinTime += "O";
    }
  }
  
  berlinTime += "\n"
  
  berlinTime += "Y".repeat(oneMinutes) + "O".repeat(4- oneMinutes) 
  
  return berlinTime;
}