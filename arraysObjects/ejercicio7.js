// Ejercicio: Uso del método reduce en JavaScript

// 1. Creamos un array de números

<<<<<<< HEAD
// const numeros = [1, 2, 3, 4, 5];

// 2. Utilizamos reduce para sumar todos los números


// 3. Calculamos el producto de todos los números


// 4. Creamos un array de objetos que representan productos en un carrito


// 5. Calculamos el total del carrito


// 6. Creamos un array de strings


// 7. Concatenamos todas las palabras en una frase


// 8. Contamos la frecuencia de cada palabra


// 9. Aplanamos un array de arrays


// 10. Agrupamos objetos por una propiedad


// 11. Encontramos el valor máximo


// 12. Creamos un pipeline de funciones
=======
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
const totalCarrito = productos.reduce((acc, producto) => acc + producto.precio, 0);
console.log(totalCarrito);

// 6. Creamos un array de strings
const palabras = ["hola", "mundo", "esto", "es", "JavaScript"];

// 7. Concatenamos todas las palabras en una frase
//const frase = palabras.reduce((acc, palabra) => acc + " " + palabra);
//console.log(frase.trim()); // trim elimina los espacios en blanco

// Otra forma de hacerlo
/*const frase = palabras.reduce((acc, palabra) => 
    acc ? acc + " " + palabra : palabra
);
console.log(frase); */

/* condicion ternaria condicion ? valorSiVerdadero : valorSiFalso
const edad = 18;
const mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje)*/


// 8. Contamos la frecuencia de cada palabra
const texto = "hola mundo hola";
const palabrasTexto = texto.split(" ");
const frecuencia = palabrasTexto.reduce((acc, palabra) => {
    acc[palabra] = (acc[palabra] || 0) + 1; // si acc[palabra] no existe(undefined), se usa 0 como valos inicial
    return acc;
}, {});
console.log(frecuencia);

/* primera iteracion 
palabra = "hola"
acc {} vacio
acc[palabra] es undefined, así que usamos 0
acc["hola"] = (undefined || 0 + 1) acc["hola"] = 0 + 1 
acc = {"hola": 1}

segunda iteracion 
palabra = "mundo"
acc {"hola": 1}
acc["mundo"] es undefined 
acc["mundo"] = (undefined || 0 + 1) acc["mundo"] = 0 + 1 
acc = {"hola": 1, "mundo": 1}

tercera iteracion 
palabra = "hola"
acc {"hola": 1, "mundo": 1}
acc["hola"] es 1
acc["hola"] = (1 || 0 + 1) acc["hola"] = 1 + 1 
acc = {"hola": 2, "mundo": 1} */

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

const agrupadasPorEdad = personas.reduce((acc, persona) => {
    const edad = persona.edad;
    if (!acc[edad]) {
        acc[edad] = [];
    }
    acc[edad].push(persona);
    return acc;
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
>>>>>>> origin/main
