function calculateAge(birth, year) {
  const age = year - birth;
​
  if (age === 0) {
    return "You were born this very year!";
  }
  if (age > 0) {
    if (age === 1) {
      return "You are 1 year old.";
    } else {
      return `You are ${age} years old.`;
    }
  }
  if (age < 0) {
    const yearsToBirth = -age;
    if (yearsToBirth === 1) {
      return "You will be born in 1 year.";
    } else {
      return `You will be born in ${yearsToBirth} years.`;
    }
  }
}
​
​