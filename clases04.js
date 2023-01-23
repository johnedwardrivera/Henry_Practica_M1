recursiva
Definir las funciones recursivas nFactorial
Ejemplo:  5! = 5 * 4 * 3 * 2 * 1
5! = 5* 4!
4! = 4 * 3 * 2 * 1
4! = 4 * 3!
1! = 1*1

function nFactorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * nFactorial(n - 1); // 5 * 5 = 25  4  * 3
} // 5  - 1 = 4
console.log(nFactorial(5));
factorial(0) => 1
factorial(1) => 1 * 1
factorial(2) => 2 * 1 * 1
factorial(3) => 3 * 2 * 1 * 1
factorial(4) => 4 * 3 * 2 * 1 * 1
factorial(5) => 5 * 4 * 3 * 2 * 1 * 1 = 120
5
function nFibonacci(n) {
  if (n == 0 || n == 1) {
    return n;
  }
  //1    +     // 0 = 1
  return nFibonacci(n - 1) + nFibonacci(n - 2);
}

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
console.log(nFibonacci(2));
4 + 2 = 8

9 - 1  = 8 + 6 = 14
5 + 3

pila
function Queue() {
  this.array = []; // 12345
}
Queue.prototype.enqueue = function (value) {
  this.array.push(value);
  return this.array;
};
Queue.prototype.dequeue = function () {
  return this.array.shift();
};
Queue.prototype.size = function () {
  if (this.array.length != 0) {
    return this.array.length;
  }
  return 0;
};
let miQueue = new Queue();
// console.log(miQueue.enqueue(1));
// console.log(miQueue.enqueue(2));
console.log(miQueue.size());
