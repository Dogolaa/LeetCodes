function nonDivisibleSubset(k, s) {
  const remainderCounts = Array(k).fill(0);

  // Contar a frequência dos restos
  for (let num of s) {
    remainderCounts[num % k]++;
  }

  let count = Math.min(remainderCounts[0], 1); // Só podemos pegar um número com resto 0

  // Percorrer os restos de 1 até k/2
  for (let i = 1; i <= Math.floor(k / 2); i++) {
    if (i === k - i) {
      // Se o resto é exatamente metade de k, só podemos pegar um
      count += 1;
    } else {
      // Pegamos o maior grupo entre os complementares
      count += Math.max(remainderCounts[i], remainderCounts[k - i]);
    }
  }

  return count;
}

// Teste com o exemplo fornecido
const s = [1, 7, 2, 4];
const k = 3;
console.log(nonDivisibleSubset(k, s)); // Saída: 3
