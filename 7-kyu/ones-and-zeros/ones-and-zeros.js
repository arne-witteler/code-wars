const binaryArrayToNumber = arr => {
  return arr.reduce((acc, bit) => acc * 2 + bit, 0);
};