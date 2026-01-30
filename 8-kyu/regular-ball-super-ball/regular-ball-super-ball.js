var Ball = function(ballType) {
  this.ballType = ballType || "regular";
};
​
var ball1 = new Ball();
var ball2 = new Ball("super");
​
ball1.ballType; // "regular"
ball2.ballType; // "super"