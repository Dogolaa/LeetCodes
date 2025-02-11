function hackerlandRadioTransmitters(x, k) {
  // Ordena as casas em ordem crescente
  x.sort((a, b) => a - b);
  console.log('Casas ordenadas:', x);

  let n = x.length;
  let i = 0;
  let transmissores = 0;

  while (i < n) {
    transmissores++; // Instala um novo transmissor
    console.log(`\nTransmissor #${transmissores} sendo considerado...`);
    console.log(`Casa atual (início da verificação): ${x[i]}`);

    // Encontrar a casa mais distante à direita dentro do alcance de k
    let localTransmissor = x[i] + k;
    console.log(
      `Procurando casa até a posição ${localTransmissor} para instalar o transmissor...`
    );

    while (i < n && x[i] <= localTransmissor) {
      console.log(`Casa ${x[i]} ainda está no alcance de ${localTransmissor}`);
      i++;
    }

    // Coloca o transmissor na última casa que ainda está dentro do alcance
    let casaComTransmissor = x[i - 1];
    console.log(`Transmissor instalado na casa ${casaComTransmissor}`);

    // Pular todas as casas cobertas por esse transmissor
    let alcanceMaximo = casaComTransmissor + k;
    console.log(
      `Cobertura máxima do transmissor vai até a casa ${alcanceMaximo}`
    );

    while (i < n && x[i] <= alcanceMaximo) {
      console.log(`Casa ${x[i]} está coberta, pulando...`);
      i++;
    }
  }

  console.log(`\nTotal de transmissores instalados: ${transmissores}`);
  return transmissores;
}

// Teste
let casas = [1, 2, 3, 5, 9];
let alcance = 1;

hackerlandRadioTransmitters(casas, alcance);
