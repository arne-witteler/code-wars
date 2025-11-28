function points(games) {
  let totalPoints = 0;
  
  for (i = 0; i < games.length; i++) {
    console.log(games[i].split(":"));
    
    let x = games[i].split(":")[0];
    let y = games[i].split(":")[1];
    
    if (x > y) {
      totalPoints = totalPoints + 3;
    } else if (x == y) {
      totalPoints = totalPoints + 1;
    } else
      totalPoints = totalPoints;
  }
  
  return totalPoints;
}