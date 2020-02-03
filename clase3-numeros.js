var edad = 22;
//edad = edad + 1;
edad += 1;

var peso = 75;
//peso = peso - 2;
peso -= 2;

var sandwich = 1;
//peso = peso + sandwich;
peso += sandwich;

var jugarAlFutbol = 3;
//peso = peso - jugarAlFutbol;
peso -= jugarAlFutbol;

var precioDelVino = 200.3;
/* var total = precioDelVino * 3;  Van a salir muchos decimales.
var total = (precioDelVino * 100 * 3) / 100;  funciona si tiene un solo decimal. */
var total = Math.round(precioDelVino * 100 * 3) / 100;
var totalStr = total.toFixed(3);
var total2 = parseFloat(totalStr);

var pizza = 8;
var personas = 2;
var cantidadDePorcionesPorPersona = pizza / personas;
