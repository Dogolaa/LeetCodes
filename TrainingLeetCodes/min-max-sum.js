function miniMaxSum(arr) {
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);
  const maxArray = [];
  const minArray = [];
  let removeMax = false;
  let removeMin = false;

  for (let value of arr) {
    if (value !== minValue || removeMin === true) {
      maxArray.push(value);
    } else {
      removeMin = true;
    }

    if (value !== maxValue || removeMax === true) {
      minArray.push(value);
    } else {
      removeMax = true;
    }
  }

  console.log(minArray, maxArray);

  const maxSum = maxArray.reduce(
    (acumulador, elemento) => acumulador + elemento,
    0
  );

  const minSum = minArray.reduce(
    (acumulador, elemento) => acumulador + elemento,
    0
  );

  console.log(minSum, maxSum);
}

miniMaxSum([1, 2, 3, 4, 5]);

console.log(6 % 2);
