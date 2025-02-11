function climbingLeaderboard(ranked, player) {
  const setRanked = new Set(ranked);
  const rankedSemRepetidos = [...setRanked];

  const resultados = [];
  let index = rankedSemRepetidos.length - 1;

  for (let nota of player) {
    while (index >= 0 && nota >= rankedSemRepetidos[index]) {
      index--;
    }

    resultados.push(index + 2);
  }

  console.log(resultados);
}
climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]);
