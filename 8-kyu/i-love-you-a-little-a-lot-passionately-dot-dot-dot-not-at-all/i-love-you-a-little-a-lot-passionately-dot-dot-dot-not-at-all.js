function howMuchILoveYou(nbPetals) {
  const arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
  const solution = (nbPetals - 1) % 6;
  return arr[solution];
}