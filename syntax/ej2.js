/**
 * Ejercicio 2
 * A partir del siguiente array que se proporciona: let values = [true, 5, false, "hola","adios", 2];
 * 1. Determinar cual de los dos elementos de texto es mayor. Orden lexicográfico.
 * 2. Utilizando exclusivamente los dos valores booleanos del array, 
 * determinar los operadores necesarios para obtener un resultado true y otro resultado false.
 * 3. Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos
 * elementos numéricos.
 */

let values = [true, 5, false, "hola","adios", 2];
let trueResult;
let falseResult;


// primera parte

if (values[3] > values[4]) {
    console.log("1. " + values[3] + " es mayor que " + values[4]);
} else {
    console.log("2. " + values[4] + " es mayor que " + values[3]); 
}

// segunda parte 

falseResult = values[0] && values[2]; //and
console.log("2. Resultado false " + falseResult);

trueResult = values[0] || values[2]; //or
console.log("2. Resultado true", trueResult);

// tercera parte

let num1 = values[1]; //5
let num2 = values[5];//2

let sum = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;


console.log("Suma: " + sum);
console.log("Resta: " + sub);
console.log("Multiplicación: " + mult);
console.log("División: " + div);
console.log("Módulo: " + mod);