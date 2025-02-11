function encryption(s) {
  let withoutSpaces = s.split(" ").join("");
  const finalArray = [];

  const L = withoutSpaces.length; // 12

  const tamMin = Math.floor(Math.sqrt(L)); // 3
  const tamMax = Math.ceil(Math.sqrt(L)); // 4

  //Ou seja ela esta entre 3 e 4

  let rows = tamMax;
  const columns = tamMax;

  // pega a menos area possivel
  while (rows * columns >= L && rows > tamMin) {
    rows = rows - 1;
  }

  const array = new Array(rows).fill(null).map(() => []);

  for (let i = 0; i < rows; i++) {
    let word = withoutSpaces.slice(0, columns);
    array[i].push(word);
    withoutSpaces = withoutSpaces.slice(columns);
  }

  console.log(array);

  for (let i = 0; i < rows; i++) {
    for (let k = 0; k < array[i][0].length; k++) {
      finalArray.push(array[i][0][k]);
    }
  }

  const arrayEncrypited = [];

  finalArray.forEach((valor, index) => {
    let columnIndex = index % columns;
    if (!arrayEncrypited[columnIndex]) {
      arrayEncrypited[columnIndex] = "";
    }
    arrayEncrypited[columnIndex] += valor;
  });

  return arrayEncrypited.join(" ");
}

console.log(encryption("have a nice day"));
