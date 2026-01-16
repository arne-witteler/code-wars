function getSize(width, height, depth) {
  const surface = 2*(width * height + width * depth + height * depth);
  const volume = width * height * depth;
  return([surface, volume]);
}
​