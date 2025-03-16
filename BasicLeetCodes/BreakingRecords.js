function breakingRecords(scores) {
  let min = scores[0],
    max = scores[0],
    minRecord = 0,
    maxRecord = 0;

  for (const value of scores) {
    if (min > value && value < max) {
      min = value;
      minRecord++;
    }

    if (value > max) {
      max = value;
      maxRecord++;
    }
  }

  return [maxRecord, minRecord];
}

console.log(breakingRecords([12, 24, 10, 24]));
