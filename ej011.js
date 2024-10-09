/**
 * Ejercicio 011. 
 * Escribir una función que tome un arreglo ordenado y 
 * devuelva un arreglo completamente desordenado 
 * Entrada: [1, 2, 5, 14, 24, 31, 50, 105] 
 * Posible salida: [105, 31, 14, 1, 2, 50, 24, 5]
 */

function shuffleArray(arr) {
    const shuffledArray = [];
    const arrCopy = arr.slice();

    while (arrCopy.length > 0) {
        const randomIndex = Math.floor(Math.random() * arrCopy.length);
        shuffledArray.push(arrCopy[randomIndex]);
        arrCopy.splice(randomIndex, 1);
    }
    return shuffledArray;
}

// Ejemplo 

const input = [1, 2, 5, 14, 24, 31, 50, 105];
const output = shuffleArray(input);
console.log(output);