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

function password(String){
    let newString = String.toLowerCase();
    newString = newString.replaceAll(" ", "");
    newString = newString.replaceAll("a", "4");
    newString = newString.replaceAll("e", "3");
    newString = newString.replaceAll("1", "3");
    newString = newString.replaceAll("i", "1");
    newString = newString.replaceAll("o", "0");
    return newString;
}

// Ejemplo de uso
console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""