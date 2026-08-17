function uniTotal (string) {
  return string.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
}