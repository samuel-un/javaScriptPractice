// MÉTODOS

// push: agrega uno o más elementos al final de un array
let fruits = ['apple', 'orange'];
fruits.push('banana');
console.log(fruits);

// pop: Elimina el último elemento de un array y lo devuelve.
let frutas = ['manzana', 'naranja', 'plátano'];
let ultimaFruta = frutas.pop();
console.log(ultimaFruta); // 'plátano'
console.log(frutas); // ['manzana', 'naranja']

// unshift: agregar uno o más elementos al incio de un array 
let frutas2 = ['naranja', 'plátano'];
frutas2.unshift('manzana');
console.log(frutas2); // ['manzana', 'naranja', 'plátano']

// splice: añade o elimina elementos en una posición específica
let frutas3 = ['manzana', 'naranja', 'plátano'];
frutas3.splice(1, 1, 'fresa'); // Elimina 1 elemento en el índice 1 y añade 'fresa'
console.log(frutas3); // ['manzana', 'fresa', 'plátano']

/* Primer parámetro (1): Es el índice donde comenzamos a modificar el array. En este caso, 1 significa que empezamos en el segundo elemento del array (recordando que los índices empiezan en 0). Así que estamos apuntando a 'naranja'.
Segundo parámetro (1): Es la cantidad de elementos que queremos eliminar desde el índice especificado. Aquí, estamos diciendo que queremos eliminar 1 elemento. Como estamos en el índice 1, esto eliminará 'naranja'.
Tercer parámetro ('fresa'): Este es un argumento opcional que indica qué elementos queremos añadir al array. En este caso, estamos añadiendo 'fresa' en el mismo lugar donde se eliminó 'naranja'.
*/

// slice: devuelve una copia de una porción del array
let frutas4 = ['manzana', 'naranja', 'plátano'];
let algunasFrutas = frutas4.slice(1, 3);
console.log(algunasFrutas); // ['naranja', 'plátano']

/* Primer parámetro (1): Este es el índice donde comienza la extracción. En este caso, 1 se refiere al segundo elemento del array (que es 'naranja').
Segundo parámetro (3): Este es el índice en el que se detiene la extracción, pero no se incluye. En este caso, 3 se refiere al cuarto elemento del array (que no existe en este caso, ya que el array tiene solo 3 elementos). Esto significa que se extraen elementos hasta, pero sin incluir, el índice 3. 
Resultado: Al ejecutar frutas.slice(1,3), se extraen los elementos desde el índice 1 hasta el índice 3 (sin incluir 3), que son: ['naranja', 'platano']*/

// forEach: ejecuta una función en cada elemento del array

let frutas5 = ['manzana', 'naranja', 'plátano'];
frutas5.forEach((fruta) => {
    console.log(fruta);
});

// map: crear un nuevo array con los resultados de aplicar una función a cada elemento
let numbers = [1, 2, 3];
let square = numbers.map(num => num * num);
console.log(square);

// filter: crea un nuevo array con todos los elementos que cumplan la condición de la función proporcionada.

let numeros = [1,2,3,4,5];
let pares =  numeros.filter(num => num % 2 === 0);
console.log(pares);

//reduce: ejecuta una función reductora sobre cada elementos del array, devolviendo un único valor 
let num2 = [1,2,3,4];
let suma = num2.reduce((acc, num) => acc + num, 0);
console.log(suma);

// 0 es el valor inicial 

// find: devuelve el primer elemento que cumple con la condición proporcionada

let numeros1 = [1,2,3,4,5];
let primerPar = numeros1.find(num => num % 2 === 0);
console.log(primerPar);

// some: comprobar si al menos un elemento del array cumple con la condición
let numeros7 = [1, 2, 3, 4];
let hayImpares = numeros7.some(num => num % 2 !== 0);
console.log(hayImpares); // true

//every: comprobar si todos los elemtos del array cumplen con la condición 
let numeros8 = [2, 4, 6];
let todosPares = numeros8.every(num => num % 2 === 0);
console.log(todosPares); // true

/*
//concat 
let frutas1 = ['manzana', 'naranja'];
let frutas2 = ['plátano', 'fresa'];
let todasLasFrutas = frutas1.concat(frutas2);
console.log(todasLasFrutas); // ['manzana', 'naranja', 'plátano', 'fresa'] */

//reverse
let numeros9 = [1, 2, 3, 4];
numeros9.reverse();
console.log(numeros9); // [4, 3, 2, 1]


let frutasInvertidas = fruta1.concat(frutas2).reverse();
console.log(frutasInvertidas);

// join: une todos los elementos de un array en una cadena 
let frutas = ['manzana', 'naranja', 'plátano'];
let cadenaFrutas = frutas.join(', ');
console.log(cadenaFrutas); // 'manzana, naranja, plátano'

// includes 
let frutas = ['manzana', 'naranja', 'plátano'];
let tieneNaranja = frutas.includes('naranja');
console.log(tieneNaranja); // true

// indexOf
let frutas = ['manzana', 'naranja', 'plátano'];
let indiceNaranja = frutas.indexOf('naranja');
console.log(indiceNaranja); // 1

// fill 
let numeros = [1, 2, 3, 4];
numeros.fill(0, 1, 3); // Rellena desde el índice 1 hasta el 3 (sin incluir)
console.log(numeros); // [1, 0, 0, 4]

// proceso de relleno 




/*
// función tradicional
function (a,b) {
    return a + b;
}

//función flecha
(a , b) => a + b 

// función tradicional (sin argumentos)
let a = 4;
let b = 2; 
function () {
    return a + b;
}

//función flecha sin argumentos 
let a = 4;
let b = 2; 
() => a + b; */