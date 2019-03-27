console.log("Hello World!!");

// Variables

// Texto
var nombre = "Daniel";

// Numero
var edad = 13;

// Boolean
var isSergiAlwaysLate = true;

// Undefinined
var something;
something = 3;

// Array
var nombres = ["Jaime", "Miriam", "Pepe"];
var edades = [1, 2, 3, 4, 5];

console.log(nombres);

// Objetos
var persona = {
  nombre: "Juan",
  edad: 30,
  hijos: [
    {
      name: "Pepito",
      edad: 3
    },
    {
      name: "Juanito",
      edad: 8
    }
  ]
}

console.log(persona);

var propiedadAMostrar = "edad";

console.log(persona[propiedadAMostrar]); // No funciona con persona.propiedadAMostrar


// Operators
console.log(1 >= 1);

// Flow Control

var edadMinima = 17;

if (edadMinima >= 18) {
  console.log("Soy mayor de edad");
} else {
  console.log("Eres un puto niñato");
}

// Loops
var array = [3, 4, 5, 6, 7, 8];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Functions
let perro = "Frank";

function sayHello() {
  console.log("Hello");
}

function sumarNumeros() {
  return 2 + 3;
}

function sayNumber(name) {
  console.log(name);
}

function superSumaNumerosQueLoFlipas(x, y) {
  return x + y;
}

function crearFrase(nombre, adjetivo) {
  return "El "+nombre+" es un puto "+adjetivo;
}