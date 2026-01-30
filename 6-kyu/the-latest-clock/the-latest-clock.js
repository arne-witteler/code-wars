function latestClock(a, b, c, d) {
  const digits = [a, b, c, d];
  let maxTime = -1;
​
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        for (let l = 0; l < 4; l++) {
​
          if (i === j || i === k || i === l || j === k || j === l || k === l) {
            continue;
          }
​
          const hours = digits[i] * 10 + digits[j];
          const minutes = digits[k] * 10 + digits[l];
​
          if (hours < 24 && minutes < 60) {
            const totalMinutes = hours * 60 + minutes;
            maxTime = Math.max(maxTime, totalMinutes);
          }
        }
      }
    }
  }
​
  const hh = String(Math.floor(maxTime / 60)).padStart(2, "0");
  const mm = String(maxTime % 60).padStart(2, "0");
​
  return `${hh}:${mm}`;
}