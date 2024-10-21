/**
 * Ejercicio 6. 
 * Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve
 * como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el
 * resultado devuelto por la función.
 */

//Declaración de dos variables con valores distintos
let evenNumber = 12;
let oddNumber = 13;

/**
 * Función que comprueba y devuelve una cadena que te dice si un número es par o impar
 * @param {number} param 
 * @returns {string}
 */

function isAnEvenNumber(param) {
    if (param % 2==0) {
        return(" es un número par.");
    } else {
        return(" es un número impar."); 
    }
}

//Salida por consola de los dos casos
console.log(evenNumber + isAnEvenNumber(evenNumber));
console.log(oddNumber + isAnEvenNumber(oddNumber));