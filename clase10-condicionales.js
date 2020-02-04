var angie = {
	nombre: "Angie",
	apellido: "Sanguino",
	edad: 22,
	ingeniera: false,
	cocinera: true,
	cantante: false,
	dj: false,
	guitarrista: false,
	drone: true
};

function imprimirProfesiones(persona) {
	console.log(`${persona.nombre} es:`);

	if (persona.ingeniera) {
		console.log(`Ingeniera`);
	} else {
		console.log("No es ingeniera");
	}

	if (persona.cocinera) {
		console.log(`Cocinera`);
	}

	if (persona.cantante) {
		console.log(`cantante`);
	}

	if (persona.dj) {
		console.log(`Dj`);
	}

	if (persona.guitarriste) {
		console.log(`Guitarrista`);
	}

	if (persona.drone) {
		console.log(`Piloto de Drone`);
	}
}

imprimirProfesiones(angie);

//Reto de Plazi
function imprimirSiEsMayorDeEdad(persona) {
	console.log(`${persona.nombre} es: `);

	if (persona.edad >= 18) {
		console.log(`Mayor de edad`);
	} else {
		console.log(`Menor de edad`);
	}
}

imprimirSiEsMayorDeEdad(angie);
