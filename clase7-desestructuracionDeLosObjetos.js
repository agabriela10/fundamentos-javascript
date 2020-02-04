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
