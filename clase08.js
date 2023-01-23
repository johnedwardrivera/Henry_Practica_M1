function factorear(num) {
  // factorial del num
  //descomponer el factorial
  let array = [];
  let factorial = factorialize(num);
  let multiplicadores = "";
  const numero = factorial;
  for (let j = 2; j <= factorial; j++) {
    let contador = 0;
    while (factorial % j == 0) {
      factorial /= j;
      contador++;
    }
    if (contador == 1) array += `${j} * `;
    if (contador > 1) multiplicadores += `${j}^${contador} * `;
  }
  return `Resultado de descomponer ${num}! = ${numero}: ${multiplicadores.substr(
    0,
    multiplicadores.length - 3
  )}`;
}

function nFactorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * nFactorial(n - 1); // 5 * 5 = 25  4  * 3
}

function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
console.log(factorear(5));
// Factorear el número recibido como parámetro y devolver en un array
// los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
// Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
// Tu código:
