function calculateTip(amount, rating) {
​
  switch (rating.toUpperCase()) {
    case "TERRIBLE":
      return(0);
      break;
  case "POOR":
      return(Math.ceil(amount * 0.05));
      break;
  case "GOOD":
      return(Math.ceil(amount * 0.1));
      break;
  case "GREAT":
      return(Math.ceil(amount * 0.15));
      break;
  case "EXCELLENT":
      return(Math.ceil(amount * 0.2));
      break;
  default:
    return "Rating not recognised";
      
  }
}