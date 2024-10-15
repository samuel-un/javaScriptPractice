/**
 * Ejercicio 010. 
 * Escribir una función que permita saber si un número 
 * se repite dentro de un arreglo.
 * Casos de prueba:
 * Caso 1: Resultado esperado: El número 5 se encuentra más de una vez [1, 22, 5, 17, 10, 5, 40, 5]
 * Caso 2: Resultado esperado: El número 7 se encuentra más de una vez [7, 41, 5, 7, 10, 13, 2]
 * Caso 3: Resultado esperado: No hay números repetidos [1, 22, 5, 14, 24, 31, 27, 15, 105]
 */

function repeatedNumber(array){
    let findNumber;

    for (let i = 0; i < array.length; i++){
        findNumber = array[i];
        
        for (let j = i + 1; j < array.length; j++){
            if (findNumber === array[j]){
                return `El número ${findNumber} se repite dentro del array.`;
            }
        }
    }
    return "No hay números repetidos."
}

// Ejemplo de prueba
console.log(repeatedNumber([1, 22, 5, 17, 10, 5, 40, 5]));
console.log(repeatedNumber([7, 41, 5, 7, 10, 13, 2]));
console.log(repeatedNumber([1, 22, 5, 14, 24, 31, 27, 15, 105]));
