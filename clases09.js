function quickSort(array) {
  if (array.length <= 1) {
    // cuando el arrays llega a cero va a frenar la recursiva
    return array;
  }
  let piv = array[0]; // la variable  piv comienza desde cero

  let left = [];
  let rigth = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < piv) {
      left.push(array[i]);
    } else {
      rigth.push(array[i]);
    }
  }
  return quickSort(left).concat(piv, quickSort(rigth));
}
let miarrys = [5, 1, 4, 2, 8];
let prueba = quickSort(miarrys);
console.log(prueba);

//mergeSort
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
}
