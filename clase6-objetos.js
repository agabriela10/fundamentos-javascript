/* var nombreAngie = "Angie";
var nombreDario = "Dario";

function imprimirNombreEnMayusculas(nombre) {
	nombre = nombre.toUpperCase();
	console.log(nombre);
}

imprimirNombreEnMayusculas(nombreAngie);
imprimirNombreEnMayusculas(nombreDario);  esto haría muy tedioso el escribir cada variable */

/* var angie = {
	nombre: "Angie",
	apellido: "Sanguino",
	edad: 22
};

var dario = {
	nombre: "Dario",
	apellido: "Perez",
	edad: 27
};

function imprimirNombreEnMayusculas(nombre) {
	nombre = nombre.toUpperCase();
	console.log(nombre);
}

imprimirNombreEnMayusculas(angie.nombre);
imprimirNombreEnMayusculas(dario.nombre);
Ejemplo #2 */
/* 
var angie = {
	nombre: "Angie",
	apellido: "Sanguino",
	edad: 22
};

var dario = {
	nombre: "Dario",
	apellido: "Perez",
	edad: 27
};

function imprimirNombreEnMayusculas(persona) {
	var nombre = persona.nombre.toUpperCase();
	console.log(nombre);
}

imprimirNombreEnMayusculas(angie);
imprimirNombreEnMayusculas(dario);
Ejemplo # 3 */
/* 
var angie = {
	nombre: "Angie",
	apellido: "Sanguino",
	edad: 22
};

var dario = {
	nombre: "Dario",
	apellido: "Perez",
	edad: 27
};

function imprimirNombreEnMayusculas(persona) {
	console.log(persona.nombre.toUpperCase());
}

imprimirNombreEnMayusculas(angie);
imprimirNombreEnMayusculas(dario);
Ejemplo # 4 */

var angie = {
	nombre: "Angie",
	apellido: "Sanguino",
	edad: 22
};

var dario = {
	nombre: "Dario",
	apellido: "Perez",
	edad: 27
};

function imprimirNombreEnMayusculas({ nombre }) {
	console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(angie);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({ nombre: "Pepito" }); //Puedo definir un atributo aquí mismo desde que siga las parámetros de tener las llanes, la key y el valor.
/* imprimirNombreEnMayusculas({ apellido: "Gomez" }); me sale indefined porque ese no es el atributo que yo definí en el parámetro de la función */
