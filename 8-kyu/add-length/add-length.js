function addLength(str) {
  const words = str.split(" ").map((word) => word + " " + word.length);
  return words;
}
​