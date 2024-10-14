/**
 * Ejercicio 013. 
 * Escribir una función llamada password que reciba un string y retorne un nuevo string realizando los siguientes cambios: Las mayúsculas se reemplazan por minúsculas. 
 * Se eliminan los espacios en blanco.
 * Reemplaza el caracter “a” por “4”.
 * Reemplaza el caracter “e” por “3”.
 * Reemplaza el caracter “i” por “1”.
 * Reemplaza el carater “o” por “0”.
 * Código de prueba: 
 * console.log(password("hola")) // "h0l4"
 * console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
 * console.log(password("")) // ""
 */


function password(str) {
    return str
        .toLowerCase() // convertir a minúsculas
        .replace(/\s+/g, '') // Eliminar espacios en blanco
        .replace(/a/g, '4') // Reemplazar 'a' por '4'
        .replace(/e/g, '3') // Reemplazar 'e' por '3'
        .replace(/i/g, '1') // Reemplazar 'i' por '1'
        .replace(/o/g, '0'); // Reemplazar 'o' por '0'
}

function password2(str) {
    let resultado = str.toLowerCase();
    resultado = resultado.replace(/\s+/g, ''); // \s para espacios en blanco + para indicar que queremos encontrar uno o más
    resultado = resultado.replace(/a/g, '4'); //g es un modificador que se coloca fuera de las barras y la g significa global 
    resultado = resultado.replace(/e/g, '3');
    resultado = resultado.replace(/i/g, '1');
    resultado = resultado.replace(/o/g, '0');

    return resultado;
}

console.log(password2("hola"));
console.log(password2("esta es una prueba"));
console.log(password2(""));
