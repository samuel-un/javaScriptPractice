/**
 * Ejercicio 8. 
 * Escribir una función que tome un arreglo de números y 
 * devuelva el número mayor de la lista. 
 * (No se debe utilizar la función Math.max) 
 * Ejemplo del arreglo : [3, 5, 7, 1, 6]
 */

function findMax(arr){
    let max = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Ejemplo de uso

const number = [3, 5, 7, 1, 6];
console.log("El número mayor es: " + findMax(number));