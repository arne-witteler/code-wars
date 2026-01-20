function toCamelCase(str) {
  if (!str) return '';
​
  const words = str.split(/[-_]/);
​
  const result = words.map((word, index) => {
    if (index === 0) {
      return word; 
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
​
  return result.join('');
}