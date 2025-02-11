function gradingStudents(grades) {
  let notas = [];
  for (let nota of grades) {
    let proximo = Math.ceil(nota / 5) * 5;
    if (nota < 38) {
      notas.push(nota);
    } else if (proximo - nota < 3) {
      notas.push(proximo);
    } else {
      notas.push(nota);
    }
  }
  return notas;
}

gradingStudents([73, 67, 38, 33]);
