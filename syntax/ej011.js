/**
 * Ejercicio 011. 
 * Escribir una función que tome un arreglo ordenado y 
 * devuelva un arreglo completamente desordenado 
 * Entrada: [1, 2, 5, 14, 24, 31, 50, 105] 
 * Posible salida: [105, 31, 14, 1, 2, 50, 24, 5]
 */

// No lo puedo sacar solo, comentado linea por linea para entenderlo.

function shuffleArray(arr) {
    
    const shuffledArray = [];// Crea un nuevo arreglo vacío para almacenar el arreglo desordenado
    const arrCopy = arr.slice();// Crea una copia del arreglo original usando slice() para no modificarlo

    
    while (arrCopy.length > 0) {// Mientras haya elementos en arrCopy
        // Genera un índice aleatorio entre 0 y la longitud actual de arrCopy - 1
        const randomIndex = Math.floor(Math.random() * arrCopy.length);
        
        // Agrega el elemento en el índice aleatorio al arreglo desordenado
        shuffledArray.push(arrCopy[randomIndex]);
        
        // Elimina el elemento seleccionado de arrCopy para evitar duplicados en la próxima iteración
        arrCopy.splice(randomIndex, 1);
    }
    return shuffledArray;// Devuelve el arreglo desordenado
}

// Ejemplo de uso
const input = [1, 2, 5, 14, 24, 31, 50, 105]; // Define un arreglo de entrada
const output = shuffleArray(input); // Llama a la función shuffleArray con el arreglo de entrada
console.log(output); // Imprime el arreglo desordenado en la consola
