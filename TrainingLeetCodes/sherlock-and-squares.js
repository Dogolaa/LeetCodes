function squares(a, b) {
  //   let squareIntegers = [];

  //   for (let i = a; i <= b; i++) {
  //     let square = Math.sqrt(i);

  //     if (Number.isInteger(square)) {
  //       squareIntegers.push(i);
  //     }
  //   }

  //   return squareIntegers.length;

  // Encontra a menor raiz quadrada inteira >= a
  let minSquareRoot = Math.ceil(Math.sqrt(a));
  console.log(minSquareRoot);

  // Encontra a maior raiz quadrada inteira <= b
  let maxSquareRoot = Math.floor(Math.sqrt(b));
  console.log(maxSquareRoot);

  // Retorna o número total de inteiros entre minSquareRoot e maxSquareRoot
  return Math.max(0, maxSquareRoot - minSquareRoot + 1);
}

console.log(squares(24, 49));
