/**
 * Ejercicio 7. 
 * Definir una función que muestre información sobre una cadena de texto que se le pasa como
 * argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
 * sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 */

function infoString(cadena){
    if (cadena == cadena.toUpperCase()){
        return `La cadena "${cadena}" esta complentamente en mayúsculas.`;
    }
    else if (cadena == cadena.toLowerCase()) {
        return `La cadena "${cadena}" esta complentamente en minúsculas.`;
    }
    else {
        return `La cadena "${cadena}" combina mayúsculas y minúsculas.`;
    }
}

// Ejemplo de prueba
console.log(infoString("solo hay minúsculas"));
console.log(infoString("SOLO HAY MAYÚSCULAS"));
console.log(infoString("Hay mayúsculas y minúsculas"));
