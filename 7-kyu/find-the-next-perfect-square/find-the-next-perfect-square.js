function findNextSquare(sq) {
  
  const checkSq = Math.sqrt(sq);
  
  if (checkSq % 1 === 0) {
    return (checkSq + 1) ** 2;
  } else
    return -1;
}