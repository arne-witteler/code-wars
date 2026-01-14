function accum(s) {
  const chars = s.split("").map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index));
  const arrToStr = chars.join("-");
  return arrToStr;
}