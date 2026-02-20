var number = function(busStops){
  
  let numberOfPeople = 0;
  
  for (let i = 0; i < busStops.length; i++) {
    numberOfPeople = numberOfPeople + busStops[i][0] - busStops[i][1]
  }
  
  if (numberOfPeople < 0) {
    return 0;
  } else
    return numberOfPeople;
}