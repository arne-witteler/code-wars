var SequenceSum = (function() {
  function SequenceSum() {}
​
  SequenceSum.showSequence = function(count) {
    if (count < 0) {
      return count + "<0";
    }
​
    if (count === 0) {
      return "0=0";
    }
​
    let sum = 0;
    let sequence = "";
​
    for (let i = 0; i <= count; i++) {
      sum += i;
      sequence += i;
​
      if (i < count) {
        sequence += "+";
      }
    }
​
    return sequence + " = " + sum;
  };
​
  return SequenceSum;
​
})();