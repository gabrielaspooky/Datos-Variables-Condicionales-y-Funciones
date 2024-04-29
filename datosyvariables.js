// 1 ✅.- Una tortilla de patatas lleva 200 gramos de patatas por persona. Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. Escribe un código que, dado el número de comensales, calcule las cantidades de ingredientes necesarios y muestre por consola, un mensaje que indique el numero de comensales, y la cantidad de cada uno de los ingredientes.
// Ej: 5 comensales,
// Se necesitará:
// 1 kg de papas
// 5 huevos
// 300 gr de cebolla.

let comensales = prompt("¿Cuántos comensales desean tortilla?");
let kgPatatas = 200;
let huevosCantidad = 1;
let gramosCebolla = 300;
let totalPatatas = kgPatatas * comensales;
let totalHuevos = huevosCantidad * (comensales / 5); // Calculamos la cantidad de huevos para comensales
let totalCebolla = gramosCebolla * (comensales / 5); // Calculamos la cantidad de cebolla para comensales
let totalIngredientes = totalPatatas + totalHuevos + totalCebolla;

console.log("Para preparar una tortilla para " + comensales + "necesitarás:" + 
      "Patatas: " + totalPatatas + " gramos" +
      "Huevos: " + totalHuevos + " unds" +
      "Cebolla: " + totalCebolla + " gramos")


// 2.- ✅ Dado un número por el usuario, devuelve por consola "true" si es un número par y "false" si es un número impar. No usar condicionales!!! aunque, puedes usar operadores de comparación.
// Ej.: numero: 50
// ¿Es par? : true

let number = parseFloat(prompt("Dime un número"))
let oddNumber = number % 2 !== 0
let evenNumber = number % 2 === 0
let numberType = console.log("¿Es par? " + evenNumber || oddNumber);

// 3.- ✅ En este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos. ¿Crees que es necesario recordar que una hora son 60 minutos y cada minuto son 60 segundos? ¿Por dónde mostraras el resultado?
// Ej.: horas : 2
// minutos 30
// Resultado 2*60*60 + 30*60 = 9000 segundos.

let hours = parseFloat(prompt("Dime una hora"))
let minutes = parseFloat(prompt("Dime una cantidad en minutos"))
let totalSeconds = alert("Las horas y minutos que has introducido se traducen en: " + hours * 60 * 60 + (minutes * 60) + " segundos")

// 4.- ✅ Muestra en un aviso (alert), cuánto debe pagar un usuario por un producto con IVA(21%). ¿Tienes alguna manera de preguntarle el precio del producto al usuario?

let productPrice = parseFloat(prompt("¿Cuál es el precio de tu producto?"))
const productTax = alert("El precio de tu producto + IVA es: " + productPrice * 1.21)
