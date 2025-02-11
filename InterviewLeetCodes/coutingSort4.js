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
 * Complete the 'countSort' function below.
 *
 * The function accepts 2D_STRING_ARRAY arr as parameter.
 */

function countSort(arr) {
  let buckets = Array.from({ length: 100 }, () => []);

  for (let i = 0; i < arr.length; i++) {
    let x = parseInt(arr[i][0]);
    let s = arr[i][1];

    if (i < arr.length / 2) {
      buckets[x].push('-');
    } else {
      buckets[x].push(s);
    }
  }

  // Juntar todos os valores dos buckets e imprimir como uma única linha
  console.log(buckets.flat().join(' '));
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  let arr = Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = readLine().replace(/\s+$/g, '').split(' ');
  }

  countSort(arr);
}
