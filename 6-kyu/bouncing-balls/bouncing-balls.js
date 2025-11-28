function bouncingBall(h,  bounce,  window) {
  let seeBall = 0;
  let height = h;
  
  if (!(h > 0 && bounce > 0 && bounce < 1 && window < h)) {
    return -1;
  } else {
    seeBall += 1;
    while (h * bounce > window) {
      seeBall += 2;
      h = h * bounce;
    }
    return seeBall;
  }
}