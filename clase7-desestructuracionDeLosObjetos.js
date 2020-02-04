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

function ImprimirNombreEnMayusculas(persona) {
	var { nombre } = persona; // es lo mismo de abajo pero las llaves me indican que es una variable que se mete a un atributo.
	//var nombre = persona.nombre; es lo mismo de arriba
	console.log(nombre.toUpperCase());
}

ImprimirNombreEnMayusculas(angie);
ImprimirNombreEnMayusculas(dario);

/* var angie = {
	nombre: "Angie",
	edad: 22
};

var dario = {
	nombre: "Dario",
	edad: 27
};

function ImprimirNombreYEdad(persona) {
	var { nombre } = persona;
	var { edad } = persona;
	console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);
}

ImprimirNombreYEdad(angie);
ImprimirNombreYEdad(dario);
RETO EJEMPLO #1
 

var angie = {
	nombre: "Angie",
	edad: 22
};

var dario = {
	nombre: "Dario",
	edad: 27
};

function ImprimirNombreYEdad(persona) {
	var nombre = persona.nombre;
	var edad = persona.edad;
	console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);
}

ImprimirNombreYEdad(angie);
ImprimirNombreYEdad(dario);
RETO EJEMPLO #2  */
