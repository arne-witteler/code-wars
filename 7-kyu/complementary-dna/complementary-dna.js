function dnaStrand(dna) {
  const complements = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
​
  return dna
    .split("")
    .map(letter => complements[letter])
    .join("");
}