var x = 4,
	y = "4";

/* var angie = {
	nombre: "Angie"
};

var otraPersona = {
	nombre: "Angie"
};
Al compararlos es falso porque JS en objetos compara las referencias y estos dos objetos no están en la misma. */

var angie = {
	nombre: "Angie"
};

var otraPersona = angie;
//aquí sí están en la misma referecia.
