function _if(bool, func1, func2) {
  if (!(bool == true)) {
    func2();
  } else {
    func1();
  }
}