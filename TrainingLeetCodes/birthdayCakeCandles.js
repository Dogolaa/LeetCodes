function birthdayCakeCandles(candles) {
  const tallestCandle = Math.max(...candles);
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === tallestCandle) {
      count++;
    }
  }

  return count;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));
