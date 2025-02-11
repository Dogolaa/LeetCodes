function gridSearch(G, P) {
  // Percorre cada linha da grade G
  for (let i = 0; i <= G.length - P.length; i++) {
    // Verifica se a primeira linha do padrão P aparece na linha G[i]
    if (G[i].includes(P[0])) {
      let startIndex = G[i].indexOf(P[0]); // Pega o índice onde o padrão começou
      let patternFound = true; // Assume que o padrão foi encontrado, até que se prove o contrário

      // Agora, verifica as próximas linhas do padrão
      for (let j = 1; j < P.length; j++) {
        // Verifica se as próximas linhas também correspondem
        if (G[i + j].substring(startIndex, startIndex + P[j].length) !== P[j]) {
          patternFound = false; // Se alguma linha não bater, o padrão não foi encontrado
          break;
        }
      }

      // Se todas as linhas baterem, retorna "YES"
      if (patternFound) {
        return "YES";
      }
    }
  }

  // Se percorreu toda a grade e não encontrou o padrão, retorna "NO"
  return "NO";
}

console.log(
  gridSearch(
    [
      "7283455864",
      "6731158619",
      "8988242643",
      "3830589324",
      "2229505813",
      "5633845374",
      "6473530293",
      "7053106601",
      "0834282956",
      "4607924137",
    ],
    ["9505", "3845", "3530"]
  )
);
