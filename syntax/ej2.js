/**
 * Ejercicio 2
 * A partir del siguiente array que se proporciona: let values = [true, 5, false, "hola","adios", 2];
 * 1. Determinar cual de los dos elementos de texto es mayor. Orden lexicográfico.
 * 2. Utilizando exclusivamente los dos valores booleanos del array, 
 * determinar los operadores necesarios para obtener un resultado true y otro resultado false.
 * 3. Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos
 * elementos numéricos.
 */

// 1.
let values = [true, 5, false, "hola","adios", 2];

if (values[3] > values[4]){
    console.log(`La palabra ${values[3]} es mayor que ${values[4]} en orden lexicográfico.`);
} 
else {
    console.log(`La palabra ${values[4]} es mayor que ${values[3]} en orden lexicográfico.`);
}

// 2.
let resultFalse = values[0] && values[2];
let resultTrue = values[0] || values[2];

console.log(`El resultado falso: ${resultFalse}`);
console.log(`El resultado verdadero: ${resultTrue}`);

// 3.
let num1 = values[1];
let num2 = values[5];

console.log(`El resultado de ${num1} + ${num2} es: ` + (num1+num2));
console.log(`El resultado de ${num1} - ${num2} es: ` + (num1-num2));
console.log(`El resultado de ${num1} * ${num2} es: ` + (num1*num2));
console.log(`El resultado de ${num1} / ${num2} es: ` + (num1/num2));
console.log(`El resultado de ${num1} % (modulo de) ${num2} es: ` + (num1%num2));