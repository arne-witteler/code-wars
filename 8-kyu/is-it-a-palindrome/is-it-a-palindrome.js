function isPalindrome(x) {
  const y = x.toLowerCase().split('').reverse().join('');
  
  if (y == x.toLowerCase()) {
    return true;
  } else
    return false;
}