function miniMaxSum(arr) {
  arr = arr.sort((a, b) => a - b);
  const arrMax = new Array(...arr);
  const tamMin = arr.length - 1;
  const maxArray = arr.splice(1);
  const minArray = arrMax.splice(0, tamMin);

  const maxSum = maxArray.reduce((n, contador) => n + contador);
  const minSum = minArray.reduce((n, contador) => n + contador);

  console.log(minSum, maxSum);
}

miniMaxSum([1, 3, 5, 7, 20, 9]);
