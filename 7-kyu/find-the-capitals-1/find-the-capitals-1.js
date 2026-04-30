var capitals = function (word) {
  
  let indicesUppercase = [];
  
  for (let i=0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      indicesUppercase.push(i);
    }
  }
  return indicesUppercase;
};