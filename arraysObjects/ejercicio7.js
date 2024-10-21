// Ejercicio: Uso del método reduce en JavaScript

// 1. Creamos un array de números

const numeros = [1, 2, 3, 4, 5];

// 2. Utilizamos reduce para sumar todos los números
const suma = numeros.reduce((acc, num) => acc + num, 0);
console.log(suma);

// 3. Calculamos el producto de todos los números
const producto = numeros.reduce((acc, num) => acc * num, 1);
console.log(producto);

// 4. Creamos un array de objetos que representan productos en un carrito
const productos = [
    { nombre: "Camiseta", precio: 20},
    { nombre: "Pantalón", precio: 50},
    { nombre: "Falda", precio: 30},
];

// 5. Calculamos el total del carrito
const totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
console.log(totalCarrito);

// 6. Creamos un array de strings
const palabras = ["hola", "mundo", "esto", "es", "JavaScript"];

// 7. Concatenamos todas las palabras en una frase
const frase = palabras.reduce((acumulador, palabra) => acumulador + " " + palabra);
console.log(frase.trim());

// Otra forma de hacerlo
/*const frase = palabras.reduce((acumulador, palabra) => 
    acumulador ? acumulador + " " + palabra : palabra
);
console.log(frase);*/ 

// 8. Contamos la frecuencia de cada palabra
const texto = "hola mundo hola";
const palabrasTexto = texto.split(" ");
const frecuencia = palabrasTexto.reduce((acumulador, palabra) => {
    acumulador[palabra] = (acumulador[palabra] || 0) + 1;
    return acumulador;
}, {});
console.log(frecuencia);

// 9. Aplanamos un array de arrays
const arrayDeArrays = [[1,2], [3,4], [5]];
const aplanado = arrayDeArrays.reduce((acc, arr) => acc.concat(arr, []));
console.log(aplanado);

// 10. Agrupamos objetos por una propiedad
const personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 30 },
    { nombre: "María", edad: 24 }
];

const agrupadasPorEdad = personas.reduce((acumulador, persona) => {
    const edad = persona.edad;
    if (!acumulador[edad]) {
        acumulador[edad] = [];
    }
    acumulador[edad].push(persona);
    return acumulador;
}, {});

console.log(agrupadasPorEdad);

// 11. Encontramos el valor máximo
const maximo = numeros.reduce((acumulador, num) => (num > acumulador ? num : acumulador), numeros[0]);
console.log(maximo);

// 12. Creamos un pipeline de funciones
const funciones = [
    num => num + 1,
    num => num * 2,
    num => num - 3
];

const resultadoPipeline = numeros.reduce((acumulador, num) => {
    return funciones.reduce((acum, fn) => fn(acum), num);
}, 0);
console.log(resultadoPipeline);