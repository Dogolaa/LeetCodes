var romanToInt = function (s) {
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  let antValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    let currentValue = romans[s[i]];

    if (currentValue < antValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }

    antValue = currentValue;
  }

  return total;
};

console.log(romanToInt("XIV"));
