// 1.- En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos. Este ejercicio debe tomar la longitud del tramo en kilómetros y el tiempo empleado en horas enteras, si la velocidad está entre 40 y 60 km/h el conductor pasa la prueba y en caso contrario es descalificado.
// Ej. 75 km en 2 horas ó 120 km en 3 horas. (siempre, números enteros). Si recorre 100 km en 4 horas, ha ido a una velocidad de 100/4 que son 25km/h. Estaría descalificado.

// 2.- Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota promedio (Solicita tres números en tres inputs distintos). El resultado que dará será "SUSPENDIDO" si la media es menor de 5, "APROBADO" si está entre 5 y 7 y "NOTABLE" por encima de 7.

// 3.- Este ejercicio le indicará a los clientes que se dirijan a la barra de bebidas o a la de comidas, para ello el cliente puede pedir vino, cerveza, refresco, agua. Si pide un cerveza o vino se le dirige a la barra y si no, pues, se le dirige a la barra de comida.

let foodType = prompt("¡Bienvenid@! ¿Qué deseas ordenar?");


if (foodType === "cerveza" || foodType === "vino") {
alert("Debes pedir en la barra de bebidas");
    
} 

else if (foodType === "agua" || foodType === "refresco") {
alert("Debes pedir en la barra de comidas")
}

else {
    alert("Tu pedido no está disponible.")
}


// 4.- El usuario tecleará dos números. Debe devolver por consola, la diferencia entre el mayor y el menor.
// Ej.: Si el usuario ingresa 5 y 8, el programa devolverá 3 .... (8-5=3). Utiliza TERNARIO, es decir, la forma cond ? true : false

// 5.- El usuario debe ingresar dos datos: un número y su cuadrado. Si es correcto el programa enviará un mensaje de acierto en caso contrario dirá que se produjo un error. Utiliza TERNARIO, es decir, la forma cond ? true : false
// Ej.: Si teclea 3 y 9 el resultado es Correcto. Si teclea 3 y 8, el resultado será Error. Se creativo con los mensajes ; )