function multiTable(number) {
  let multiplier = 1;
  
  let arr = []
  
  while(multiplier < 11) {
    const product = multiplier * number;
    arr.push(`${multiplier} * ${number} = ${product}`)
    multiplier += 1;
  }
  return arr.join('\n')
}