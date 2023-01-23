// Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

//javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function (a, b, c) {
    b = a;
    console.log(b); //8
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b); //9
};
c(8, 9, 10);
console.log(b); // 10
console.log(x); // 1


//javascript
console.log(bar); // undefined
console.log(baz); // error
foo();
function foo() {
  console.log("Hola!"); // hola
}
var bar = 1;
baz = 2;


//javascript
var instructor = "Tony";
if (true) {
  var instructor = "Franco";
}
console.log(instructor); // Franco


//javascript
var instructor = "Tony";
console.log(instructor); // Tony
(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor); // Franco
  }
})();
console.log(instructor); // Tony


//javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor); //The Flash
  console.log(pm); //Reverse Flash
}
console.log(instructor); //The Flash
console.log(pm); //Franco"


//Coerción de Datos

//Cuál crees que será el resultado de la ejecución de estas operaciones?:

//javascript
6 / "3"      //=2
"2" * "3"    //= 6
4 + 5 + "px"  // = "9px"
"$" + 4 + 5   //= "$9"
"4" - 2      // = 2
"4px" - 2   //= NaN
7 / 0     //"No se puede dividir por cero  infinity"
{}[0] =     //[0]
parseInt("09")  // = 09
5 && 2  // = 2
2 && 5   // = 5
5 || 0  //= 5
0 || 5  //= 5
[3]+[3]-[10] //= 23
3>2>1   //= false
//  [] == ![] = true


//Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

// Hoisting

//Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

//javascript
function test() {
  console.log(a) = undefined
  console.log(foo()) = 2

  var a = 1;
  function foo() {
    return 2;
  }
}

test();


// porque a invocar una function dentro de otra function retornara el resultado actual
// porque la variable var esta declarada y se esta ejecutando al principio de la function, no la va
// a encontrar y ejecutara undefined

//Y el de este código? :

//javascript
var snack = "Meow Mix";

function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack;
  }
  return snack;
}

getFood(false) = undefined


//porque el valor de food es false y no entrara a la condicion entonces retornara undefined

// This

//Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

//javascript
var fullname = "Juan Perez";
var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname()) = "Aurelio De Rosa"

var test = obj.prop.getFullname;

console.log(test()) = "Juan Perez"

//Event loop

//Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

//javascript
function printing() {
  console.log(1); // 1
  setTimeout(function () {
    console.log(2); // 4
  }, 1000);
  setTimeout(function () {
    console.log(3); //3
  }, 0);
  console.log(4); // 2
}

printing();


