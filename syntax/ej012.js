/**
 * Ejercicio 012.
 * Elaborar una función que reciba 3 números (entre el 1 y el 100) y definir cual es el mayor (No se debe utilizar la función Math.max)
 * Elaborar una función que reciba 3 números (entre el 1 y el 100) y definir el menor de tres números (No se debe utilizar la función Math.min)
 * Elaborar una función que reciba un número y adivine un número entre el 1 y el 100 en el menor número de pasos posibles
 * Elaborar una función que reciba un entero (entre el 100 y el 200) y determinar si es múltiplo de 3
 * Elaborar una función que reciba 3 números y determinar sí uno es la suma de los otros dos
 */

function findMax(num1, num2, num3) {
	let numMax = num1;

	if (
		num1 < 1 ||
		num1 > 100 ||
		num2 < 1 ||
		num2 > 100 ||
		num3 < 1 ||
		num3 > 100
	) {
		console.log("Cada número debe estar entre 1 y 100.");
		return;
	} else {
		if (num1 < num2) {
			numMax = num2;

			if (num2 < num3) {
				numMax = num3;
			}
		} else if (num1 < num3) {
			numMax = num3;
		}
	}

	console.log(`El número mayor es: ${numMax}`);
}

// Ejemplo de uso
findMax(1100, 20, 10);

function findMin(num1, num2, num3) {
	let numMin = num1;

	if (
		num1 < 1 ||
		num1 > 100 ||
		num2 < 1 ||
		num2 > 100 ||
		num3 < 1 ||
		num3 > 100
	) {
		console.log("Los números deben ser entre 1 y 100");
	} else {
		if (num1 > num2) {
			numMin = num2;

			if (num2 > num3) {
				numMin = num3;
			}
		} else if (num1 > num3) {
			numMin = num3;
		}
	}
	console.log(`El número menor es: ${numMin}`);
}

// Ejemplo de uso
findMin(100, 20, 10);

function guessNum(num) {
	if (num < 1 || num > 100) {
		console.log("El número debe estar entre 1 y 100.");
		return;
	}

	let low = 1;
	let high = 100;
	let numIntentos = 0;
	let numAdivinar = Math.floor((low + high) / 2);

	if (num > numAdivinar) {
		for (let i = numAdivinar; i <= num; i++) {
			numIntentos++;
			if (i === num) {
				numAdivinar = i;
                break;
			}
		}
	} 
    else {
		for (let i = numAdivinar; i >= num; i--) {
			numIntentos++;
			if (i === num) {
				numAdivinar = i;
                break;
			}
		}
	}

	console.log(`El número a adivinar es: ${numAdivinar}. Fue adivinado en ${numIntentos} intentos`);
}

// Ejemplo de uso
guessNum(65);