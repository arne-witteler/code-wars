function remove(s,n) {
  return s.replace(/!/g, () => n-- > 0 ? '' : '!');
}