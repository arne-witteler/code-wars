function vowelIndices(word){
  const vowels = ["a", "e", "i", "o", "u", "y"];
  const indices = [];
  const wordToArr = word.split("");
  
  for (let i = 0; i < wordToArr.length; i++) {
    if (vowels.includes(wordToArr[i].toLowerCase())) {
      indices.push(i+1);
    }
  }
  return indices;
}