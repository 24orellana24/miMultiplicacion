// Declaración de variables
let numMult, contador = 0;

// Ciclo para ingresar el número condicionado a que sea entre 1 y 20
do {
  if (contador > 0) {
    alert(`¡¡¡Número ingresado fuera de rango!!!\nIngrese un número entero entre 1 y 20`);
  }
  contador++;
  numMult = parseInt(prompt('Ingrerse número, del cual necesita su tabla de multiplicar: '));
} while (isNaN(numMult) || numMult < 1 || numMult > 20);

// Función arrow con ciclo for para mostrar la tabla de multiplicar
const miMultiplicacion = numero => {
  for ( let i = 1; i <= numMult; i++) {
    let resultado = i * numMult;
    console.log(`${numMult} x ${i} = ${resultado}`);
  }
}

// Función arrow con ciclo for para mostrar el factorial del número ingresado
const miFactorial = numero => {
  let numFact = 1;
  for (let i = 1; i <= numMult; i++) {
    numFact *= i;
    console.log(`El factorial del número ${i} es ${numFact}`);
  }
}

// Llamada de mis funciones para que se ejecuten y muestren el resultado por consola
miMultiplicacion();
miFactorial();