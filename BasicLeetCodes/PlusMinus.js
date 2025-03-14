function plusMinus(arr) {
  const tam = arr.length;
  const positive = arr.filter((n) => n > 0).length / tam;
  console.log(positive.toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
