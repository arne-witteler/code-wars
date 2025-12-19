function gimme (triplet) {
  
  const sortedTriplet = triplet.slice().sort((a, b) => a - b)
  const middleValue = sortedTriplet[1];
  
  const result = triplet.filter((num) => middleValue)
  
  return triplet.indexOf(middleValue);
}