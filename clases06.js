// listas alinedas

function Node(value) {
  this.value = value; // valor del nodo
  this.next = null; // valor al final de los vagones
}
// const miNuevo = new Node(5);
// console.log(miNuevo);
// const miNuevo2 = new Node(2);
// console.log(miNuevo2);

// miNuevo.nex = miNuevo2;
// console.log(miNuevo);

// lista para manejar el nodo
function LinkedList() {
  this.heard = null;
}

LinkedList.prototype.add = function (value) {
  const newNode = new Node(value); // creamos un nuevo nodo
  let current = this.heard;
  // la lista esta vacia
  if (current == null) {
    this.heard = newNode; // agregamos un nuevo nodo
  }
  while (current.nex != null) {
    current = current.next;
  }
  current = new Node();
  return value;
};
LinkedList.prototype.remove = function () {
  let current = this.heard;
  // si la lista esta vacia
  if (current == null) return null;
  // la lista tiene un nodo
  if (!current.next) {
    const aux = this.heard.value;
    this.heard = null;
    return aux;
  }
};
LinkedList.prototype.search = function () {};
