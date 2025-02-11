'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  let positivo = 0,
    negativo = 0,
    zero = 0;
  const tamArray = arr.length;

  // Versão 1 - Usei um for of para percorrer o array, otimizando o codigo, resolvi refazer com forEach
  // executando a função em cada elemento do array

  // for (let valor of arr) {
  //   if (valor > 0) {
  //     positivo++;
  //   } else if (valor < 0) {
  //     negativo++;
  //   }else {
  //     zero++;
  //   }
  // }

  arr.forEach((valor) => {
    if (valor > 0) positivo++;
    else if (valor < 0) negativo++;
    else zero++;
  });

  console.log((positivo / tamArray).toFixed(5));
  console.log((negativo / tamArray).toFixed(5));
  console.log((zero / tamArray).toFixed(5));
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
