function betterThanAverage(classPoints, yourPoints) {
  
  const classScores = classPoints.reduce((accumulator, currentValue) => accumulator + currentValue,
  yourPoints,);
  
  return classScores / (classPoints.length + 1) < yourPoints ? true : false;
}
​