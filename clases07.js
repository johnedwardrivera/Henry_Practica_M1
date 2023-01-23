// arboles binarios

//insert
function BinarySearchTree(value) {
  //propiedades de la clase arbol
  this.value = value;
  this.left = null; // movemos el  valor (value) a la izquierda si el munero es menor que nodo principal
  this.right = null; // movemos el valo (value) a la derecha si el  numero es mayor que nodo principal
}

BinarySearchTree.prototype.insert = function (value) {
  // insertamos un nuevo valor

  // condicion para saber si el numero que menor que el nodo
  if (value < this.value) {
    this.addLeft(value);
  } else {
    this.addright(value);
  }
};

BinarySearchTree.prototype.addLeft = function (value) {
  if (this.left != null) {
    this.left.insert(value);
  } else {
    this.left = new BinarySearchTree(value);

    return value;
  }
};

BinarySearchTree.prototype.addright = function (value) {
  if (this.right != null) {
    this.right.insert(value);
  } else {
    this.right = new BinarySearchTree(value);

    return value;
  }
};

BinarySearchTree.prototype.size = function (miArbolito) {
  if (miArbolito == null) {
    return 0;
  }

  if (miArbolito.left == null && miArbolito.right == null) {
    return 1;
  } else {
    return this.size(miArbolito.left) + this.size(miArbolito.right);
  }
};

const miArbolito = new BinarySearchTree(1);
miArbolito.insert(2);
miArbolito.insert(5);
miArbolito.insert(3);
miArbolito.insert(4);
console.log(miArbolito);
console.log(miArbolito.size(miArbolito));
