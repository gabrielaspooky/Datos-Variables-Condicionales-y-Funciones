// 0.- ✅ Crea una función que salude al usuario por su nombre.  Puedes utilizar la consola o un cuadro de dialogo. Ej.: Hola Angel !!! 

function sayHello() {
    let userName = prompt("Type your name");
    alert('Hello, ' + userName + "!");
}

sayHello();

// 1.- ✅ Crea una función que tenga dos argumentos: num1, num2, y que devuelva como resultado la suma de ambos números. Se asume que se usarán solo números válidos, no letras o símbolos, es decir, no hace falta comprobar el dato ingresado.
// Ej.: Llamo a la función como sumar(3,5) deberá devolver 8.


function suma() {
    let num1 = parseFloat(prompt("Dame el primer número de la suma"));
    let num2 = parseFloat(prompt("Dame el segundo número de la suma"));
    let resultado = num1+num2;
    alert("Este es el resultado de tu suma: " + resultado);
    }
    suma();
    

// 2.- Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos. Si quieres hacer la validación del dato, sería genial lograrlo. Puedes hacerlo aplicando condicionales, sin embargo, tienes las herramientas para hacerlo sin usar las condicionales.
// Ej.: al llamarla como esPar(5) me dará false, mientras que con esPar(6) me dará true.

function esPar(num)

// 3.- Crea tres variables: lado1, lado2, lado3. Dale 3 valores numéricos. A continuación, crea una función y sus condicionales para que se muestre por consola si el triángulo es equilátero, isósceles o escaleno.

let lado1 = 2
let lado2 = 3
let lado2 = 4

function triangleType(equilátero, isósceles, escaleno) {
     
}

// 4.- ✅ Subimos el nivel?... crea un programa que simule una calculadora con funciones para realizar operaciones matemáticas básicas. Pide al usuario dos números y el operador que utilizaras( "+" , "-" , "*" , "/" ).

function calculadora() {
let num1 = parseFloat(prompt("Dame el primer número de tu operación"));
let mathSymbol = prompt("Dame el símbolo con el cual deseas realizar tu operación. Ejemplo: + si es suma, - si es resta, * si es división o / si se trata de una división.");
let num2 = parseFloat(prompt("Dame el segundo número de tu operación"))


if (mathSymbol === '+') {
    alert(num1 + num2)
}

else if (mathSymbol === '-') {
    alert(num1 - num2)
}

else if(mathSymbol === '*') {
alert(num1 * num2)
}

else if(mathSymbol === '/') {
    alert(num1 / num2)
    }

    else {
        alert("Parámetro inválido");
        return;
    }
}

calculadora()


// 5.✅  And last but not least:


// The Body Mass Index (BMI) is a way to estimate whether a person has a healthy weight for their height. It is calculated by dividing a person's weight (in kilograms) by the square of their height (in meters).

// Your task is to write a function calculateBMI(weight, height) that takes two arguments: weight (in kilograms) and height (in meters), and returns the calculated BMI.

// In addition, the function should return a string that interprets the BMI according to the following table:
// Less than 18.5: 'Underweight'
// 18.5 - 24.9: 'Normal'
// 25 - 29.9: 'Overweight'
// 30 or more: 'Obesity'


// For example, calculateBMI(70, 1.75) should return 'Normal'.

// Remember to round the BMI to two decimal places.

function calculateBMI() {
    let weight = parseFloat(prompt("Introduce tu peso actual en Kg"));
    let height = parseFloat(prompt("Introduce tu altura actual en metros"));
    let userBMI = weight / (height * height);
    alert("Your BMI is equal to: " + userBMI);

if (userBMI < 18.5) {
    alert('Underweight')
}

else if (userBMI > 18.5 && userBMI <=24.9) {
alert('Normal')
}

else if (userBMI >= 25 && userBMI <=29)
{
alert('Overweight')
}

else if (userBMI >= 30)
{
    alert('Obesity')
}

else {
    alert("Parámetro inválido");
}

}
calculateBMI() 

