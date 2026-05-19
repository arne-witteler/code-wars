class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }
​
isWorthIt() {
  const worthIt = this.draft - (1.5 * this.crew);
  
  if (worthIt > 20) {
    return true;
  } else 
    return false;
  }
}
​