let numMult, contador = 0;

do {
  if (contador > 0) {
    alert(`¡¡¡Número ingresado fuera de rango!!!\nIngrese un número entero entre 1 y 20`);
  }
  contador++;
  numMult = parseInt(prompt('Ingrerse número, del cual necesita su tabla de multiplicar: '));
} while (isNaN(numMult) || numMult < 1 || numMult > 20);

for ( let i = 1; i <= numMult; i++) {
  let resultado = i * numMult;
  console.log(`${numMult} x ${i} = ${resultado}`);
}

const miFactorial = numero => {
  let numFact = 1;
  for (let i = 1; i <= numMult; i++) {
    numFact *= i;
  }
  return numFact;
}

console.log(`El factorial del número ${numMult}! es: ${miFactorial(numMult)}`);