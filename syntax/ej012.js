/**
 * Ejercicio 012. 
 * Elaborar una función que reciba 3 números (entre el 1 y el 100) y definir cual es el mayor (No se debe utilizar la función Math.max)
 * Elaborar una función que reciba 3 números (entre el 1 y el 100) y definir el menor de tres números (No se debe utilizar la función Math.min)
 * Debes crear una función que simule un juego en el que un número es elegido al azar
 * entre 1 y 100, y la función debe intentar adivinar ese número. La función debe
 * hacer esto de la manera más eficiente posible, utilizando la menor cantidad
 * de intentos.
 * Elaborar una función que reciba un entero (entre el 100 y el 200) y determinar si es múltiplo de 3
 * Elaborar una función que reciba 3 números y determinar sí uno es la suma de los otros dos
 */

// Ejercicio 3
function guessNumber(number) {
    let low = 1; 
    let high = 100;
    let guess;
    let attempts = 0;

    while (low <= high) {
        guess = Math.floor((low + high) / 2);
        attempts++;
      
        if (guess === number) {
            return attempts;
        } else if (guess < number) {
            low = guess + 1;
        } else {
            high = guess - 1;
        }
    }
    return attempts;
}

console.log(guessNumber(65));


