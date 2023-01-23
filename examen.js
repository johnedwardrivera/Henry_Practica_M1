function guardarCamisetas(ropaQueue) {
  // Tu código aquí:
  this.camisa = {};
}
guardarCamisetas.prototype.enqueue = function (value) {
  return this.camisa.push(value);
};
let camisa = [
  "Camiseta Blanca",
  "Camiseta Negra",
  "Camiseta Azul",
  "Camiseta Amarilla",
  "Camiseta Roja",
];
console.log(guardarCamisetas(camisa));
