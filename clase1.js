var nombre = "Joan",
	apellido = "Garcia";

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();
var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length;
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;
var str = nombre.substr(1, 3);

var ultimaLetraDelNombre = nombre.charAt(cantidadDeLetrasDelNombre - 1);
console.log(
	"Hola usuario, la última letra de su nombre es " + ultimaLetraDelNombre + "."
);
