/**
 * Ejercicio 4. 
 * El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo
 * que se basa en obtener el resto de la división entera del número de DNI y el número 23. A partir del
 * resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.
 * El array de letras es (...)
 * Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A. 
 * estos datos, elaborar un pequeño script que:
 * 1. Almacene en una variable el número de DNI indicado por el usuario y en otra variable la 
 * letra del DNI que se ha indicado. (Pista: si se quiere pedir directamente al usuario que
 * indique su número y su letra, se puede utilizar la función prompt())
 * 2. En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0 
 * o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el
 * número proporcionado no es válido y el programa no muestra más mensajes.
 * 3. Si el número es válido, se calcula la letra que le corresponde según el método explicado
 * anteriormente.
 * 4. Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no
 * coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es
 * correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.
 */

let dniLetters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let dniNumber = 12345678;
let enteredLetter = "Z";
let calculatedLetter;

console.log("El número de DNI a validar es el: " + dniNumber);
console.log("La letra introducida es la: " + enteredLetter);

if (dniNumber < 10000000 || dniNumber > 99999999){
    console.log("El número es incorrecto.");

} else if (enteredLetter.length > 1) {
    console.log("Solo puedes introducir una letra.");
} 
else{
    generatedLetter();

}

function generatedLetter(){
    numGeneratedLetter = dniNumber % 23;
    calculatedLetter = dniLetters[numGeneratedLetter];

    comparedniLetters();
}

function comparedniLetters(){
    if (enteredLetter !== calculatedLetter){
        console.log(`Incorrecto la letra correcta es la ${calculatedLetter}.\nEl DNI completo es: ${dniNumber}${calculatedLetter}`);
    }
    else {
        console.log(`Correcto. El DNI completo es: ${dniNumber}${calculatedLetter}`);
    }
}