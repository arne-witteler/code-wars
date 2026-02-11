function contamination(text, char) {
  const x = text.split("");
  
  return char.repeat(x.length);
}