function encryption(s) {
  // Remove espaços
  let withoutSpaces = s.split(" ").join("");
  const L = withoutSpaces.length;

  // Definir tamanho mínimo e máximo da grade
  const tamMin = Math.floor(Math.sqrt(L));
  const tamMax = Math.ceil(Math.sqrt(L));

  // Escolher o menor grid que satisfaça rows * columns >= L
  let rows = tamMin;
  let columns = tamMax;
  if (rows * columns < L) {
    rows = tamMax;
  }

  // Criar a matriz (grid)
  const array = new Array(rows).fill(null).map(() => []);

  let index = 0;
  for (let i = 0; i < rows; i++) {
    let word = withoutSpaces.slice(index, index + columns);
    array[i].push(word);
    index += columns;
  }

  // Construir a mensagem criptografada lendo coluna por coluna
  const arrayEncrypited = [];

  for (let col = 0; col < columns; col++) {
    let word = "";
    for (let row = 0; row < rows; row++) {
      if (array[row][0][col]) {
        word += array[row][0][col];
      }
    }
    arrayEncrypited.push(word);
  }

  return arrayEncrypited.join(" ");
}

// Testando
console.log(encryption("have a nice day")); // Saída esperada: "hae and via ecy"
