/**
 * Ejercicio 3. 
 * Completar las condiciones de los if del siguiente script 
 * para que los mensajes de los console.log() se muestren siempre de forma correcta:
 */

let num1 = 5;
let num2 = 8;

// num1 no es mayor de num2.
if (num1 < num2){
    console.log("num1 no es mayor que num2");
}

// num2 es positivo o cero.
if (num2 >= 0){
    console.log("num2 es positivo o cero");
}

// num1 es distinto de cero.
if (num1 !== 0){
    console.log("num1 es distinto de cero")
}

// se incrementa num1 en 1 no lo hace mayor o igual a num2.
if ((num1 + 1) < num2){
    console.log("Incrementar en 1 el valor de num1 no hace que sea igual o mayor que num2")
}

