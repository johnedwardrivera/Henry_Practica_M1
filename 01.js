function BinarioADecimal(num) {
  // num => 10110
  //        43210
  // hacer los pasos que tenga que hacer
  // return numDecimal
  let numDecimal = 0;
  let numStr = num.toString();
  let arr = [];

  for (let i = numStr.length - 1; i >= 0; i--) {
    arr.push(numStr[i]);
  }

  arr.map((value, index) => {
    console.log("Este es el valor ", value, "Este es el index ", index);
    let operacion = value * 2 ** index;
    numDecimal = numDecimal + operacion;
  });

  return parseInt(numDecimal);
}

function DecimalABinario(num) {
  // num => 22
  // hacer los pasos que tenga que hacer...
  // return numBinario
  let binario = num;
  let residuo = [];

  while (binario !== 0) {
    residuo.unshift(binario % 2);
    console.log(residuo);
    let div = binario / 2;
    binario = parseInt(div);
  }
  return residuo.join("");
}
