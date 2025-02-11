function migratoryBirds(arr) {
  const types = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i < arr.length; i++) {
    types[arr[i]]++;
  }

  let maxCount = 0;
  let birdId = 0;

  for (let i = 1; i <= 5; i++) {
    if (types[i] > maxCount) {
      maxCount = types[i];
      birdId = i;
    }
  }

  return birdId;
}

migratoryBirds([1, 4, 4, 4, 5, 3]);
