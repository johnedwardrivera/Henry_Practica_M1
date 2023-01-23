Clasuracion;
function contador() {
  let contadorAumento = 0;
  return function () {
    contadorAumento++;
    return contadorAumento;
  };
}
let contador1 = contador();
console.log(contador1());
console.log(contador1());

function cacheFunction(cb) {
  return function () {
    return cb();
  };
}

function square(n) {
  return n * n;
}

const squareCache = cacheFunction(square);

console.log(squareCache(5));

function pruebacacheFunctio(arg) {
  cacheFunction(cb);
  obj = {};
}

//bin
var instructor = {
  nombre: "Franco",
  edad: 25,
};

var alumno = {
  nombre: "Juan",
  curso: "FullStack",
};

function getNombre() {
  return this.nombre;
}

let getNombreInstructor = getNombre.bind(instructor);

console.log(getNombreInstructor());

let getNombreAlumno = getNombre.bind(alumno);
console.log(getNombreAlumno());

var persona = {
  nombre: "Claudia",
  apellido: "Torres",
};

var perro = {
  nombre: "fifo",
  edad: 50,
};

function logNombre() {
  console.log(this.nombre);
}

var logNombrePersona = logNombre.bind(persona);
var logNombrePerro = logNombre.bind(perro);

logNombrePersona();
logNombrePersona();
logNombrePersona();
logNombrePersona();

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(null, "*", "*");
console.log(textoAsteriscos("hola"));

let textoGuiones = crearCadena.bind(null, "-", "-");
let textoUnderscore = crearCadena.bind(null, "_", "_");

function cacheFunction(cb) {
  let cache = {};
  return function (arg) {
    if (cache.hasOwnProperty(arg)) {
      return cache[arg];
    } else {
      let resul = cb(arg);
      cache[arg] = resul;
      return resul;
    }
  };
}
function prueba(x) {
  return x * 2;
}

let resultado = cacheFunction(prueba);
console.log(resultado(2));
let resultado1 = cacheFunction(prueba);
console.log(resultado1(2));
