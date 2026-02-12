function defineSuit(card) {
  
  const sign = card.at(-1);
  
  switch(sign) {
    case '♣':
      return 'clubs'
      break;
    case '♦':
      return 'diamonds'
      break
    case '♥':
      return 'hearts'
      break
    case '♠':
      return 'spades'
      break
    default:
  }
}