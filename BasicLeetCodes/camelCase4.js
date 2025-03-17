function processCamelCase(input) {
  let lines = input.trim().split('\n');
  let results = [];

  lines.forEach((line) => {
    let [operation, type, words] = line.split(';');
    if (operation === 'S') {
      // Operação de dividir (split)
      let splitWords = words
        .replace(/\(\)$/, '') // Remove parênteses se for um método
        .replace(/([A-Z])/g, ' $1') // Insere espaço antes de letras maiúsculas
        .toLowerCase()
        .trim();
      results.push(splitWords);
    } else if (operation === 'C') {
      // Operação de combinar (combine)
      let wordList = words.split(' ');
      let camelCaseStr = '';
      if (type === 'C') {
        // Classe: primeira letra maiúscula, demais palavras com inicial maiúscula
        camelCaseStr = wordList
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join('');
      } else if (type === 'V') {
        // Variável: primeira palavra minúscula, demais com inicial maiúscula
        camelCaseStr =
          wordList[0] +
          wordList
            .slice(1)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join('');
      } else if (type === 'M') {
        // Método: igual a variável, mas com parênteses no final
        camelCaseStr =
          wordList[0] +
          wordList
            .slice(1)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join('') +
          '()';
      }
      results.push(camelCaseStr);
    }
  });

  console.log(results.join('\n'));
}

// Exemplo de entrada
let input = `S;M;plasticCup()
C;V;mobile phone
C;C;coffee machine
S;C;LargeSoftwareBook
C;M;white sheet of paper
S;V;pictureFrame`;

console.log(processCamelCase(input));
