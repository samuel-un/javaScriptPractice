// Ejercicio: Recorrer arrays con for y forEach en JavaScript

// 1. Creamos un array de números
const numeros = [1, 2, 3, 4, 5];

// 2. Recorremos el array con un bucle for
console.log("Array recorrido con for:");
for (let i = 0; i < numeros.length; i++) {
	console.log(numeros[i]);
}

// 3. Recorremos el array con forEach
console.log("\nArray recorrido con forEach:");
numeros.forEach((numero) => {
	console.log(numero);
});

// 4. Calculamos la suma de los números usando for
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
	suma += numeros[i];
}
console.log("\nLa suma de todos los números del array usado for es: " + suma);

// 5. Calculamos la suma de los números usando forEach
numeros.forEach((numero) => {
	suma += numero;
});
console.log(
	"\nLa suma de todos los números del array usado forEach es: " + suma
);

// 6. Creamos un nuevo array con los números pares usando for
let numerosParesFor = [];

for (let i = 0; i < numeros.length; i++) {
	if (numeros[i] % 2 == 0) {
		numerosParesFor.push(numeros[i]);
	}
}
console.log("El nuevo array de números pares con for es:");
console.log(numerosParesFor);

// 7. Creamos un nuevo array con los números pares usando forEach
let numerosParesForEach = [];

numeros.forEach(numero => {
    if (numero % 2 == 0){
        numerosParesForEach.push(numero);
    }
});

console.log("El nuevo array de números pares con forEach es:");
console.log(numerosParesForEach);