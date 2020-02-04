var nombre = "Angie";

/* 
function imprimirNombreEnMayusculas() {
	nombre = nombre.toUpperCase();
	console.log(nombre);
}

imprimirNombreEnMayusculas(); si lo hago así, estaría modificando la variable global "nombre" y no es una buena practica. */

function imprimirNombreEnMayusculas(n) {
	n = n.toUpperCase();
	console.log(n);
}

imprimirNombreEnMayusculas(nombre);
