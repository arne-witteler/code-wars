function pipeFix(numbers) {
  let fixedPipes = [];
  
  for (let i = numbers[0]; i <= numbers[numbers.length-1]; i++) {
    fixedPipes.push(i);
  }
  return fixedPipes;
}