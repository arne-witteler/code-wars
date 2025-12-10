function disemvowel(str) {
  
  const vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
  const arr = str.split('');
  
  const filteredArr = arr.filter((vowel) => !vowels.includes(vowel));
  
  return filteredArr.join('');
}